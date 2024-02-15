const path = require('path');

module.exports = [
  {
  mode: 'production',
  entry: './src/MyReactComponent.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'MyReactComponent.[chunkhash].js',
    library: 'MyReactComponent',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this', // Define the global object used
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
},
  {
  mode: 'production',
  entry: './src/header_banner.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'HeaderBanner.[chunkhash].js',
    library: 'HeaderBanner',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this', // Define the global object used
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
},
];