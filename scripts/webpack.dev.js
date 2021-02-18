const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
module.exports = merge(common, {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true,
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./index.html"),
            inject: "head",
            scriptLoading: "blocking",
            chunks: ["vendor"],
        }),
    ],
});
