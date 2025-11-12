const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  // mode: 'development',
  entry: [path.resolve(__dirname, 'src', 'index.js'), path.resolve(__dirname, 'src', 'index.scss')],
  output: {
    path: path.join(__dirname, 'dist'), // bundled file in dist/
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // applies to js files
        use: ['babel-loader'], // transpiles your js
        exclude: /node_modules/ // don't transpile node modules
      },
      {
        test: /\.s?[ac]ss$/, // applies to css/scss/sass files
        use: [
          MiniCssExtractPlugin.loader, // create bundled css file
          {
            loader: 'css-loader', // resolves @import statements
            options: { url: false } // don't resolve url() statements
          },
          'sass-loader' // compiles sass to css
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({ template: './index.html' })]
};

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  config.module.rules[1].use[0] = isProduction
    ? MiniCssExtractPlugin.loader
    : 'style-loader';

  if (isProduction) {
    config.devtool = 'source-map';
  } else {
    config.devServer = { hot: true };
    config.devtool = 'eval-source-map';
  }

  return config;
};
