import path from "path";

const ROOT_PATH = path.resolve(__dirname, "./src");

export default {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["postcss-loader"],
        type: "css",
      },
    ],
  },
  resolve: {
    alias: {
      "@": ROOT_PATH,
    },
  },
};
