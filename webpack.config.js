/// <binding />
//"use strict";

const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const bundleOutputDir = "./wwwroot/dist";


module.exports = (env) => {
    const isDevBuild = (process.env.NODE_ENV === "development") || (env && env.development) || false;
    const appPath = path.resolve(__dirname);
    console.log(env);
    console.log("Is dev? " + isDevBuild);

    return [{
        stats: { modules: false },
        context: appPath,
        entry: {
            "main": [
                "./ClientApp/boot.ts",
                "./ClientApp/scss/Custom.scss",
                "bootstrap-vue/dist/bootstrap-vue.css",
                "./ClientApp/scss/Main.scss"
            ]
        },
        devtool: isDevBuild ? "eval-module-source-map" : false,
        mode: isDevBuild ? "development" : "production",
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    include: /ClientApp/,
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            'ts': 'ts-loader',
                            'css': 'vue-style-loader!css-loader',
                            'scss': 'vue-style-loader!css-loader!sass-loader',
                            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                        }
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                },
                {
                    test: /\.css$/,
                    use: isDevBuild ? [
                        "style-loader",
                        "css-loader"
                    ] : ExtractTextPlugin.extract({ use: "css-loader"})
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    use: "url-loader?limit=25000"
                },
                {
                    test: /\.s[a|c]ss$/,
                    exclude: "/node_modules/",
                    use: isDevBuild ? [
                        "style-loader", // creates style nodes from JS strings
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS
                    ] : ExtractTextPlugin.extract({ use: [ "css-loader", "sass-loader" ] })
                }
            ]
        },
        output: {
            path: path.join(appPath, bundleOutputDir),
            filename: "[name].js",
            publicPath: "dist/"
        },
        resolve: {
            extensions: ['.ts', '.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        plugins: [
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify(isDevBuild ? "development" : "production")
                }
            }),
            new webpack.DllReferencePlugin({
                context: appPath,
                manifest: require("./wwwroot/dist/vendor-manifest.json")
            })].concat(isDevBuild ? [
                new webpack.SourceMapDevToolPlugin({
                    filename: "[file].map",
                    moduleFilenameTemplate: path.relative(bundleOutputDir, "[resourcePath]")
                })
            ] : [
                new ExtractTextPlugin("site.css"),
                new OptimizeCssAssetsPlugin({})
            ])
    }];
};