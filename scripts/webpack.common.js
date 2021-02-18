const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: {
        vendor: "./src/index.ts",
        core: "./src/core/index.ts",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        fallback: {
            crypto: false,
        },
    },
    output: {
        filename: "./[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [new Dotenv()],
};
