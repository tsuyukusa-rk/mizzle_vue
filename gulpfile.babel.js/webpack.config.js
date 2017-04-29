import Webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ejsBuilder from 'ejs-webpack-builder';
import Path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import config from './config';

module.exports = {
  entry: config.webpack.entry,
  output: config.webpack.output,
  // Configuration for dev server
  devServer: {
    contentBase: config.dist,
    port: 3000,
    open: true,
    hot: true,
    inline: true
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css', '.scss', '.html', '.vue', '.ejs', '.styl'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'scripts': Path.resolve(__dirname, '../assets/scripts'),
      'styles': Path.resolve(__dirname, '../assets/styles')
    },
    root: [ Path.resolve('./assets') ]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader', 'scss-loader'] },
      { test: /\.styl$/, loaders: ['stylus-loader'] },
      { test: /\.ejs$/, loader: 'ejs-loader' },
    ],
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  vue: {
    postcss: [
      require('autoprefixer')({
        // ☆IEは9以上、Androidは4以上、iOS Safariは8以上
        // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
        browsers: config.autoprefixer.browsers,
        cascade: false
      })
    ]
  },
  plugins: [
    // new ejsBuilder({
    //   root: __dirname,
    //   files: [{
    //     source: {
    //       name: 'index.ejs',
    //       dir: './src',
    //     },
    //     target: {
    //       name: 'index.html',
    //       dir: ''
    //     },
    //     parameters: {},
    //     encoding: 'utf8'
    //   }]
    // }),
    // liveReload
    new Webpack.HotModuleReplacementPlugin(),
    // new Webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    // copy
    // new CopyWebpackPlugin(
    //   [
    //     { from: Config.src + '/**/*.html', to: Config.dist }
    //   ],
    //   {
    //     ignore: [],
    //     // By default, we only copy modified files during
    //     // a watch or webpack-dev-server build. Setting this
    //     // to `true` copies all files.
    //     copyUnmodified: true
    //   }
    // ),
    // // clean
    // new CleanWebpackPlugin([Config.dist], {
    //   root: __dirname,
    //   verbose: true,
    //   dry: true,
    //   exclude: []
    // })
  ]
};
