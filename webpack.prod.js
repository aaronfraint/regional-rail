const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",

  entry: {
    zone_creation: path.resolve(__dirname, "./src/index_zone_creation.js"),
    analysis: path.resolve(__dirname, "./src/index_analysis.js"),
  },

  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "[name].bundle.js",
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/img",
          to: "img",
          toType: "dir",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: "Regional Rail",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
      chunks: ["zone_creation"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Regional Rail",
      template: path.resolve(__dirname, "./src/template_analysis.html"),
      filename: "analysis.html",
      chunks: ["analysis"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: true,
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
