const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

 
module.exports = {
    entry: {
            index : path.resolve(__dirname, "src/index.js"),
            profile:"./src/profile.js",
            product:"./src/product.js",
            contact:"./src/contact.js",
            kontak:"./src/kontak.js",
            kalender:"./src/kalender.js",
           
       },
   
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "[name].bundle.js",
       chunkFilename:"[id].bundle.js"
   },
   optimization: {
    splitChunks: {
      chunks: 'all',
     },
  },
   devServer:
   {
       port: 8080,
       contentBase: './public'
   },
   resolve: {
    extensions: ['.js', '.json']
  },
   module: {
            rules: [
                        {
                            test: /\.css$/,
                            use: [
                                    {
                                        loader: "style-loader"
                                    },
                                   {
                                        loader: "css-loader"
                                    }
                                ]
                                
                        },

                        {
                            test: /\.(png|jpe?g|gif|ico)$/i,
                            use:[
                                 {

                                    loader:"file-loader",
                                    options: {
                                        
                                        name: 'dist/image/[name].[ext]'
                                        }

                                    }
                                ],
                                
                                                            
                            }
                       
                    ]
             },
    plugins: [
                /* HTML Webpack Plugin */
                new HtmlWebpackPlugin({
                    template: path.resolve(__dirname, "./index.html"),
                    filename: "index.html",
                    chunks:["index"]
                }),
                /* HTML Webpack Plugin */
                new HtmlWebpackPlugin({
                    template:  path.resolve(__dirname, "./profile.html"),
                    filename: "profile.html",
                    chunks:["profile"]
                }),
                /* HTML Webpack Plugin */
                new HtmlWebpackPlugin({
                    template:  path.resolve(__dirname, "./product.html"),
                    filename: "product.html",
                    chunks:["product"]      
                }),
                /* HTML Webpack Plugin */
                new HtmlWebpackPlugin({
                    template:  path.resolve(__dirname, "./contact.html"),
                    filename: "contact.html",
                    chunks:["contact"] ,
                    minChunks:2     
                }),
                new HtmlWebpackPlugin({
                    template:  path.resolve(__dirname, "./contact.html"),
                    filename: "contact.html",
                    chunks:["kontak"] ,
                    minChunks:2     
                }), new HtmlWebpackPlugin({
                    template:  path.resolve(__dirname, "./contact.html"),
                    filename: "contact.html",
                    chunks:["kalender"] ,
                    minChunks:2     
                })
                
               
       

                 
            ]
}