var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    watch: true,
    entry: "./src/main.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [
            "",
            ".ts",
            ".tsx",
            ".scss"
        ]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("vendor.css")
    ]
};