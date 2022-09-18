const { resolve } = require("path/posix");
const path = require("./");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      assert: require.resolve("assert"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify"),
      url: require.resolve("url"),
      path: require.resolve("path-browserify"),
      fs: false,
    },
  },
  // New config, e.g. config.plugins.push...
};
