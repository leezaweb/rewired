const StyleLintPlugin = require("stylelint-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = function override(config, env) {
  config.externals = {
    SmoothScroll: "smooth-scroll"
  };

  config.module.rules.push({
    test: /\.css$/,
    use: ["style-loader", "css-loader", "postcss-loader"]
  });

  config.plugins.push(new StyleLintPlugin({ fix: true }));

  return config;
};
