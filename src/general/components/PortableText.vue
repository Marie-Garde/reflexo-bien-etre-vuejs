<script lang="ts">
import { defineComponent, h, type PropType, type VNode } from "vue";
import { RouterLink } from "vue-router";
import { urlFor } from "@/sanityClient";
import type {
  PortableTextBlock,
  PortableTextImage,
  PortableTextNode,
  PortableTextSpan,
} from "../interface/PortableText";

/** Styles de bloc que le Studio autorise, et la balise correspondante. */
const BLOCK_TAGS: Record<string, string> = {
  h2: "h2",
  h3: "h3",
  blockquote: "blockquote",
};

const MARK_TAGS: Record<string, string> = {
  strong: "strong",
  em: "em",
  underline: "u",
};

function isImage(node: PortableTextNode): node is PortableTextImage {
  return node._type === "articleImage";
}

/**
 * Rend le texte enrichi venant de Sanity : paragraphes, intertitres, citations,
 * listes à puces et numérotées, gras, italique, souligné, liens, et images
 * intercalées dans le corps des articles.
 */
export default defineComponent({
  name: "PortableText",
  props: {
    blocks: { type: Array as PropType<PortableTextNode[]>, default: () => [] },
    paragraphClass: { type: String, default: "" },
    // Balise des paragraphes simples. `p` hérite de la police Mulish définie
    // globalement ; `div` reste sur la police du body.
    as: { type: String, default: "p" },
    /** Largeur demandée pour les images du corps de texte. */
    imageWidth: { type: Number, default: 1200 },
  },
  setup(props) {
    function renderSpan(span: PortableTextSpan, block: PortableTextBlock): VNode | string {
      const marks = span.marks ?? [];

      // Les marques s'empilent de la plus interne à la plus externe.
      return marks.reduce<VNode | string>((child, mark) => {
        const tag = MARK_TAGS[mark];
        if (tag) return h(tag, [child]);

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

    function renderImage(node: PortableTextImage) {
      const image = h("img", {
        src: urlFor(node).width(props.imageWidth).format("webp").quality(80).url(),
        alt: node.alt ?? "",
        loading: "lazy",
        decoding: "async",
      });

      return h("figure", { key: node._key, class: "portable-text-figure" }, [
        image,
        ...(node.caption ? [h("figcaption", node.caption)] : []),
      ]);
    }

    return () => {
      const nodes: VNode[] = [];
      let items: VNode[] = [];
      let listTag: "ul" | "ol" | null = null;

      // Les puces qui se suivent sont regroupées dans une même liste.
      function flushList() {
        if (!items.length || !listTag) return;
        nodes.push(h(listTag, { key: `${listTag}-${nodes.length}` }, items));
        items = [];
        listTag = null;
      }

      for (const node of props.blocks) {
        if (isImage(node)) {
          flushList();
          nodes.push(renderImage(node));
          continue;
        }

        if (node.listItem) {
          const tag = node.listItem === "number" ? "ol" : "ul";
          if (listTag && listTag !== tag) flushList();
          listTag = tag;
          items.push(renderBlock(node, "li", false));
          continue;
        }

        flushList();
        const style = node.style ?? "normal";
        // Un intertitre ou une citation garde sa balise ; le reste suit `as`.
        nodes.push(renderBlock(node, BLOCK_TAGS[style] ?? props.as, !BLOCK_TAGS[style]));
      }
      flushList();

      return nodes;
    };
  },
});
</script>
