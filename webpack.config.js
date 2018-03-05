var weboack = require('webpack');
var path =require('path');

var BUILD_DIR = path.resolve(__dirname,'dist');
var APP_DIR = path.resolve(__dirname,'src');

const excludedFolder = [
    path.join(__dirname,',node_modules')
];

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR + "/app",
        filename: 'bundle.js',
        publicPath: '/app'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: excludedFolder,
                include: APP_DIR,
                loader: 'babel-loader',
                options: {
                            presets: ['env','react','es2015','stage-2'],
                    }
            }
        ]
    }
};
module.exports = config;
