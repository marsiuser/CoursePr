const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  //...
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules:[
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
            'vue-style-loader',
            'css-loader'
        ]
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
          },
        },
      ]
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: [
               {
                   loader: 'file-loader?name=./assets/fonts/webfonts/[name].[ext]'
               },
               {
                   loader: 'file-loader?name=./assets/fonts/Roboto/[name].[ext]'
               }
           ]
    },
    {
      test: require.resolve("jquery"),
      use: [
          {
              loader: "expose-loader",
              options: "jQuery"
          },
          {
              loader: "expose-loader",
              options: "$"
          }
      ]
  }
    ],

  },
  plugins: [
    // make sure to include the plugin!
    
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: 'index.html'
    })
  ],
  
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 8080
  },
  context: path.resolve(__dirname,'src'),
  entry: './main.js',
};
