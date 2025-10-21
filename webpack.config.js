import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'node:path';
import ESLintPlugin from 'eslint-webpack-plugin';

export default (env) => {
  const isDev = env?.mode === 'development';

  return {
    mode: env?.mode ?? 'development',
    entry: './src/index.js',
    output: {
      filename: '[name].js',
      path: path.resolve('./dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    devServer: {
      static: './dist',
      port: 3000,
      open: true,
      hot: true,
    },
    devtool: isDev ? 'inline-source-map' : false,
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new ESLintPlugin({
        extensions: ['js'],
        emitWarning: true,
        failOnError: !isDev,
      }),
    ],
  };
};
