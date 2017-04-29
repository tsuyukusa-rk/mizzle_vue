module.exports = (config) => {
  config.set({
    basePath: '',
    // フレームワークはmocha, アサーションライブラリはchaiを使用
    frameworks: ['mocha', 'chai'],
    // testディレクトリ配下のjsファイルはテストコードとみなす
    files: [
      'spec/**/*.js'
    ],
    exclude: [
    ],
    // testディレクトリ配下のjsファイルに対し、webpackとsourcemapを実行
    preprocessors: {
      'spec/**/*.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    // Karma実行時のwebpack実行内容 (webpack.config.jsとは別)
    // jsファイルをES6 → ES5に変換 (preprocessorsの設定でtest配下のみ)
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /.*_modules/,
            loader: 'babel-loader'
          }
        ]
      }
    },
    // 使用するプラグインを列挙
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-chai',
      'karma-chrome-launcher'
    ]
  });
};
