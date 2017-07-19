'use strict';
const path = require('path')
const webpack = require('webpack');

const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlwebpackPlugin = require('html-webpack-plugin')

let entry = {};

let ROOT = path.resolve(__dirname, "../");
var htmlplugin =
    new HtmlwebpackPlugin({
        filename: `./index.html`,
        template: `./demo/template.html`,
        chunks: ['bundle'],
        minify: {
            collapseWhitespace: true,
            minifyJS: true
        }
    });
module.exports = {
    devtool: "source-map",
    entry: {
        'bundle': path.resolve(ROOT, './demo/index.js')
    },
    output: {
        path: path.resolve(ROOT, './demo/dist'),
        filename: '[name].js'
    },
    plugins: [htmlplugin,new ExtractTextPlugin("style.css")],
    devServer: {
        port: 10000,
        host: '127.0.0.1',
        https: false,
        compress: true,
        disableHostCheck: true
    },
    resolve:{
      extensions : ['.vue','.js','.json']
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /(node_modules)/
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        postcss: [require('postcss-bem')(),require('postcss-nested')(),require('postcss-cssnext')(),require('postcss-short'), require('postcss-position')()
                      ],
                      extractCSS: true
                    }
                }],
            },
            {
                test: /\.(css|scss)$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader?modules'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                ]
            }
        ]
    }
}
