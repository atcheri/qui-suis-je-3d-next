import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Qui-suis je? Atch",
    short_name: "Ze site",
    description: "Non, ce n'est pas un site de rencontre.",
    start_url: "/",
    display: "standalone",
    background_color: "#362F78",
    theme_color: "#362F78",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
