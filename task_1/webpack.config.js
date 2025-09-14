const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "js", "main.ts"),

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        },
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    port: 8080,
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      typescript: {
        diagnosticOptions: { semantic: true, syntactic: true }
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};