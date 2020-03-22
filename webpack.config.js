module.exports = {
  entry: [
    './src/index.js',
    './src/index.css'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.(ico|png|jpg|gif|svg|woff(2)?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/',
              context: 'src/',
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
