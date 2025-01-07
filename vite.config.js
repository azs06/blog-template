import { defineConfig } from "vite";
import postcssNested from "postcss-nested";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssNested(),
        autoprefixer(),
        cssnano({ preset: "default" }),
      ],
    },
  },
});
