var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:'./src/main.js',
	output:{
		path:'dist',
		filename: '[name]-[hash]-bundle.js'
	},
	resolve: {
        extensions: ['', '.js', '.vue']       
    },  
	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:'vue'
			},
			{
				test: /\.js?$/,
				loader: 'babel',
				query: {
					presets: ['es2015']					
				},
				exclude: /node_modules/
			}				
		]
	},
	plugins: [       
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html')
        })      
    ],
	devServer: {       
        // proxy: {
        //     "/api/*": {                
        //         target: "http://localhost:8000",
        //         changeOrigin: true         
        //     }
        // }
    }
}