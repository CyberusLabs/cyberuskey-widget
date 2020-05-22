const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'widget': './src/widget.ts',
    'widget.min': './src/widget.ts',
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'cyberuskey-widget',
    umdNamedDefine: true,
    globalObject: 'typeof(self) !== \'undefined\' ? self : this'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 1024,
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        include: /\.min\.js$/
      })
    ]
  }
}