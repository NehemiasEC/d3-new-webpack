const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const liveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports={
    mode:"development",
    entry: {
        main: './src/client/index.js',
        app:'./src/client/js/app.js'
    },
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['env','react']
                    }
                }],
                test:/\.js$/,
                exclude:/node_modules/
            },
            {
                use:['style-loader','css-loader'],
                test:/\.css$/
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'src/client/index.html'
        }),
        
        new liveReloadPlugin()
    ]
}
