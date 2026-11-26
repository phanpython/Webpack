import { watch } from "fs";
import { resolve } from "path";

// eslint-disable-next-line no-undef
export const context = resolve(__dirname, "src");
export const entry = "./index.js";
export const output = {
  filename: "js/main.js",
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, "dist"),
};
export const devServer = {
  hot: true,
  static: {
    directory: "./dist",
    watch: true,
  },
};
