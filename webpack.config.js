const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/about.js',
    },  
    output: {
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
            test: /\.scss$/,
            use: ["style-loader", "css-loader","sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ]
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html',
         }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            inject: true,
            chunks: ['about'],
            filename: 'about.html',
        })
    ]
};