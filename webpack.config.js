const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/MyReactComponent.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'MyReactComponent.js',
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
};