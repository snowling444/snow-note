var path = require('path');
var webpack = require('webpack');

module.exports = {
  // entry: './src/index.js',
  entry: [
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    // publicPath: "/static/",
    publicPath: "/build/",
    stats: { colors: true },
    // port: 3002,
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval',
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    loaders: [
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
}
