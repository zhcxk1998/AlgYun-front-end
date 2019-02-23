const HtmlWebPackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /.(jpg|png|gif|svg)$/,
        use: ['url-loader?limit=8192&name=./[name].[ext]'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    // }),
  ],
  devServer: {
    // contentBase: require('path').join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    host: 'localhost',
    inline: true,
    historyApiFallback: true,
    proxy: {
      // 匹配代理的url
      '/api': {
        // 目标服务器地址
        target: 'https://algyun.cn:81/',
        // 路径重写
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false,
      },
    },
    disableHostCheck: true,
  },
};
