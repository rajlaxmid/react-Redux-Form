var config = {
   entry: './entry.js',
	
   output: {
      //this is bubdle file which will be generated when you run "webpack" command
      //bundle.js >> include it to index.html File (this is transpiled and minified file)
      filename: 'bundle.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;