const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

// メインプロセスの設定
const main = {
  mode: 'development',
  target: 'electron-main',
  entry: path.join(__dirname, 'src/main/index.ts'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['ts', 'js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
};

// レンダラープロセスの設定
const renderer = {
  mode: 'development',
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  entry: path.join(__dirname, 'src/renderer/index.tsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist', 'scripts'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [new MonacoWebpackPlugin()],
};

module.exports = [main, renderer];
