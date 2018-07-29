const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env) => {
    const isDevBuild = (process.env.NODE_ENV === "development") || (env && env.mode === "development") || false;
    console.log("Is Dev build? " + isDevBuild);
    const extractCss = new ExtractTextPlugin("vendor.css");
    const appPath = path.resolve(__dirname);

    return [{
        stats: { modules: false },
        resolve: { extensions: [".js"] },
        devtool: isDevBuild ? "eval-module-source-map" : false,
        mode: isDevBuild ? "development" : "production",
        entry: {
            vendor: [
                "event-source-polyfill",
                "isomorphic-fetch",
                "jquery",
                "vue",
                "bootstrap",
                "bootstrap-vue"
            ]
        },
        module: {
            rules: [
                {
                    test: /\.css(\?|$)/,
                    use: extractCss.extract({
                        fallback: "style-loader",
                        use: ["css-loader"]
                    })
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/,
                    use: "url-loader?limit=100000"
                },
                {
                    test: /\.s[a|c]ss$/,
                    use: extractCss.extract({use: [ "css-loader", "sass-loader" ]})
                }
            ]
        },
        output: {
            path: path.join(appPath, "wwwroot", "dist"),
            publicPath: "dist/",
            filename: "[name].js",
            library: "[name]_[hash]"
        },
        plugins: [
            extractCss,
            new OptimizeCssAssetsPlugin({
            }),
            new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"'
            }),
            new webpack.DllPlugin({
                path: path.join(appPath, "wwwroot", "dist", "[name]-manifest.json"),
                name: "[name]_[hash]"
            })
        ]
    }];
};
