//开发时的配置文件
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
    filename: 'bundle.js',
    publicPath: "/build/"

  },
  devServer: {
    stats: { colors: true },
    port: 3001,
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],//模块推送
  devtool: 'eval',
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    loaders: [
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: "babel-loader" },
      {test: /\.css/,loader: 'style!css'},
      {test: /\.(jpe?g|png)$/,loader: 'file-loader'}
    ]
  },
}
