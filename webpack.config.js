const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const liveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');

module.exports={
    mode:"development",
    entry:'./src/client/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            },
            {
                use:['style-loader','css-loader'],
                test:/\.css$/
            },
            {
                test:/\.scss$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',options:{
                            sourceMap:true
                        }
                    },
                    {
                        loader:'sass-loader',options:{
                            sourceMap:true
                        }
                    }
                ]
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
