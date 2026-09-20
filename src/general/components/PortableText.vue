<script lang="ts">
import { defineComponent, h, type PropType, type VNode } from "vue";
import { RouterLink } from "vue-router";
import type { PortableTextBlock, PortableTextSpan } from "../interface/PortableText";

/**
 * Rend le texte enrichi venant de Sanity : un <p> par bloc, avec le gras,
 * l'italique et les liens. Le schéma du Studio n'autorise que ces trois
 * marques, donc inutile d'embarquer un moteur de rendu complet.
 */
export default defineComponent({
  name: "PortableText",
  props: {
    blocks: { type: Array as PropType<PortableTextBlock[]>, default: () => [] },
    paragraphClass: { type: String, default: "" },
    // Balise de chaque paragraphe. `p` hérite de la police Mulish définie
    // globalement ; `div` reste sur la police du body.
    as: { type: String, default: "p" },
  },
  setup(props) {
    function renderSpan(span: PortableTextSpan, block: PortableTextBlock): VNode | string {
      const marks = span.marks ?? [];

      // Les marques s'empilent de la plus interne à la plus externe.
      return marks.reduce<VNode | string>((child, mark) => {
        if (mark === "strong") return h("strong", [child]);
        if (mark === "em") return h("em", [child]);

        const definition = block.markDefs?.find((def) => def._key === mark);
        if (definition?._type === "link" && definition.href) {
          const href = definition.href;
          return href.startsWith("/")
            ? h(RouterLink, { to: href }, () => [child])
            : h("a", { href, target: "_blank", rel: "noopener noreferrer" }, [child]);
        }

        // Marque inconnue : on garde le texte plutôt que de le perdre.
        return child;
      }, span.text);
    }

    function renderBlock(block: PortableTextBlock, tag: string, useClass: boolean) {
      return h(
        tag,
        { key: block._key, class: useClass ? props.paragraphClass : undefined },
        block.children.map((span) => renderSpan(span, block)),
      );
    }

    return () => {
      const nodes: VNode[] = [];
      let bullets: VNode[] = [];

      // Les puces consécutives sont regroupées dans une même liste.
      function flushBullets() {
        if (!bullets.length) return;
        nodes.push(h("ul", { key: `ul-${nodes.length}` }, bullets));
        bullets = [];
      }

      for (const block of props.blocks) {
        if (block.listItem) {
          bullets.push(renderBlock(block, "li", false));
        } else {
          flushBullets();
          nodes.push(renderBlock(block, props.as, true));
        }
      }
      flushBullets();

      return nodes;
    };
  },
});
</script>
