const { DefinePlugin } = require("webpack");

const path = require("path");

module.exports = (env) => {
  return {
    entry: "./src/index.js",

    plugins: [
      new DefinePlugin({
        "process.env.DEBUG.verbose": (log) => console.verbose(log),
        "process.env.DEBUG.info": (log) => console.info(log),
        "process.env.DEBUG.fatal": (log) => console.error(log),
      }),
    ],

    output: {
      path: path.resolve(__dirname, "dist"),
    },
  };
};
