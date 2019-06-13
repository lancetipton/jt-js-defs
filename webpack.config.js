const path = require('path')
const CleanWebpackPlugin = require('./node_modules/clean-webpack-plugin')
const TerserPlugin = require('./node_modules/terser-webpack-plugin/dist/cjs')
const BundleAnalyzerPlugin = require('./node_modules/webpack-bundle-analyzer/lib').BundleAnalyzerPlugin;
const libraryName = 'jtree-definitions'
const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'
const buildPath = 'build'
const outputFile = '.js'
const outputPath = path.resolve(__dirname, buildPath)
const paths = [ './build' ]
const WebpackShellPlugin = require('webpack-shell-plugin');

const plugins = [
  new CleanWebpackPlugin(paths, {}),
  new WebpackShellPlugin({
    // onBuildStart: [ 'yarn build:modules' ],
    onBuildEnd: [ 'yarn build:modules' ],
    dev: false
  })
]

process.env.ANAL && plugins.push(new BundleAnalyzerPlugin())

module.exports = {
  mode: NODE_ENV || 'development',
  devtool: NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  entry: {
    [libraryName]: './src/index.js'
  },
  output: {
    path: outputPath,
    filename: `[name]${outputFile}`,
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "(typeof self !== 'undefined' ? self : this)",
    chunkFilename: '[name].js',
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
  optimization: {
    nodeEnv: NODE_ENV,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `${packageName.replace('@', '')}`
          },
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
          sourceMap: isDev,
        }
      })
    ]
  }
}
