require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

const excludedFolder = [
    path.join(__dirname, ',node_modules')
];

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR + "/app",
        filename: 'bundle.js',
        publicPath: '/app'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react', 'es2015', 'stage-2'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            }, {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};
module.exports = config;
