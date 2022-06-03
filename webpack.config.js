//build using node.js command prompt
//cd folderName
//npx webpack

module.exports = {
	mode: 'production',
    entry: './src/app.js',
    output: { filename: './bundle.js' },
    module: {
		rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};