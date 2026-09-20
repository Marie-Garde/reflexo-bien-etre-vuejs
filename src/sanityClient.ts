import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  // Pendant la génération statique on interroge l'API directement, pour graver
  // le contenu le plus à jour dans le HTML. Dans le navigateur, le CDN suffit.
  useCdn: !import.meta.env.SSR,
  apiVersion: "2021-06-07",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
