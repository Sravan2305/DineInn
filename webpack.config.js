const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: './src/index.ts',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ "style-loader", "css-loader", "sass-loader"],
      },
    ],

  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
  },

//   plugins: [
//       new HtmlWebpackPlugin()
// ],

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
  },
  mode : "development"
};