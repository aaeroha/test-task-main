/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');

export default {
  entry: {
    main: [path.resolve(DIR, 'client/src/index.tsx')],
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [path.join(DIR, 'client/src'), path.join(DIR, 'tests')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: Infinity,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(DIR, 'client/src/index.html'),
      minify: false,
    }),
  ],

  resolve: {
    modules: ['./client/src', './node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      actions: path.resolve(DIR, 'client/src/actions'),
      assets: path.resolve(DIR, 'client/src/assets'),
      components: path.resolve(DIR, 'client/src/components'),
      hooks: path.resolve(DIR, 'client/src/hooks'),
      utils: path.resolve(DIR, 'client/src/utils'),
    },
  },

  output: {
    path: path.join(DIR, 'build'),
    filename: 'index.js',
  },
};
