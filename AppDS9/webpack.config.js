const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    entry: './src/app/ConfigVue.js',
    output: {
        path: __dirname + '/src/public/js',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'babel-loader',
                     options: {
                        plugins:[
                            "@babel/plugin-syntax-dynamic-import"
                        ]
                     }   
                    }
                ]
                    
                
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
               
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                 use:[
                     {
                        loader: 'file-loader',
                        options: {
                            name: '../img/[name].[ext]',
                            outputPath: '../img',
                        }
                     }
                 ]   
            },
                
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}