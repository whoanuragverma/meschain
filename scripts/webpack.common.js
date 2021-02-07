const path = require("path");

module.exports = {
    entry: "./src/index.ts",
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
        filename: "./bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
