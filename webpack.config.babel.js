/**
 * Created by ALIENWARE17 on 2016/12/7.
 */
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OpenBrowserPlugin from 'open-browser-webpack-plugin'

export default {
  entry: {
    bundle: ['react-hot-loader/patch',
      'babel-polyfill',
      './src/index.js'],
  },
  output: {
    filename: '[name].js',
    path: '/build',
    publicPath: "/build"
  },
  module: {
    rules: [
      {test: /\.jsx?$/, use: 'babel-loader', exclude: path.resolve(__dirname, 'node_modules')},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader"},
      {
        test: /\.(woff|woff2)(\?v=\d\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "优惠券交易平台",
    }),
    new OpenBrowserPlugin({
      url: "http://localhost:8080"
    }),
  ],
  devtool: "eval"
}