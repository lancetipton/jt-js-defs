const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const libraryName = 'jtree-definitions'
const ENV_MODE = process.env.ENV
const outputFile = '.js'
const paths = [ './build' ]

const plugins = [ new CleanWebpackPlugin(paths, {}) ]
process.env.ANAL && plugins.push(new BundleAnalyzerPlugin())

module.exports = {
  mode: ENV_MODE || 'development',
  devtool: ENV_MODE === 'production' ? 'source-map' : 'inline-source-map',
  entry: {
    [libraryName]: './src/scripts/index.js'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name]' + outputFile,
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "(typeof self !== 'undefined' ? self : this)"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { enforce: 'pre', test: /\.(js|css)$/, loader: 'remove-comments-loader' }
    ]
  },
  plugins: plugins,
  resolve: {
    alias: {
      jTConstants: path.resolve(__dirname, './src/scripts/constants'),
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
        }
      })
    ]
  }
}
