var path = require("path");
module.exports = {
  entry: {
    app: ["./src/"]
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
        test: /\.js$/,
        include: path.resolve(__dirname, './dist/'),
        loader: 'babel',
        query: {
          presets: ['es2016']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
    rules: {
      test: /\.scss$/,
      use: {
        loader: "sass-loader"
      }
    }
  },
  devServer: {
    port: 8080,
    stats: 'errors-only',
    open: true
  }
};
