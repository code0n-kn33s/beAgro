const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const FontminPlugin = require("fontmin-webpack");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const SvgStorePlugin = require('webpack-external-svg-sprite');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.pug$/,
        use: [
          "html-loader",
          "pug-html-loader"
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { sourceMap: true }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                config: { path: 'postcss.config.js'}
              }
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true }
            }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(woff|woff2|eot|otf|ttf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 90
              },
              optipng: {
                optimizationLevel: 9
              },
              pngquant: {
                quality: "90",
                speed: 9
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),

    new HtmlWebPackPlugin({
      template: "./src/index.pug",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('autoprefixer'),
          require('cssnano')
        ]
      }
    }),
    new FontminPlugin({}),

    // svg sprites

    // new SvgStorePlugin({
    //   emit: true,
    //   directory: path.resolve(__dirname, 'src/img/svg/'),
    //   name: 'img/svg/sprite.svg',
    //   prefix: 'icon-',
    //   suffix: '',
    //   svgoOptions: {
    //     plugins: []
    //   }
    // })
  ]
};
