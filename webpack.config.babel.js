/**
 * Created by ALIENWARE17 on 2016/12/7.
 */
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OpenBrowserPlugin from 'open-browser-webpack-plugin'
import webpack from 'webpack'

export default {
    entry: {
        bundle: ['react-hot-loader/patch',
            './src/index.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'babel', exclude: path.resolve(__dirname, 'node_modules')},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "测试页",
        }),
        new OpenBrowserPlugin({
            url: "http://localhost:8080"
        }),
    ]
}