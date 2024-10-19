const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    content: "./src/scripts/content.ts",
    popup: "./src/popup/popup.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/scripts"), // This is where the JS files go
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/images", to: "../images" },
        { from: "src/popup/popup.html", to: "../popup/popup.html" },
      ],
    }),
  ],
  devtool: "source-map",
};
