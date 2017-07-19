'use strict';

const fs = require('fs')
const path = require('path')
const webpack = require('webpack');

const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let entry  = './index.js',
    cssPlugins = []

cssPlugins.push(new ExtractTextPlugin('style.css'))

let root = path.resolve(__dirname, "../");


module.exports = {
    entry: entry,
    output: {
        path: path.resolve(root, "./dist"),
        filename: 'index.js',
        library: 'ellipsisPlus',
        libraryTarget: 'umd'
    },
    externals: {
        'vue': {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: cssPlugins,
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
                        postcss: [require('postcss-bem')(), require('postcss-cssnext')()],
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
