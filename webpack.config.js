const webpack = require('webpack');
const path = require('path');
const envFile = require('node-env-file');

//use NODE_ENV=production webpack      for create a lighter bundle or NODE_ENV=production webpack for a deep lighter bundle
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

module.exports = {
  entry: [
  //will use script! style! and css! to execute our loaders and transform to bundle and script! means it will produce those frameworks without bundle them
    'script!jquery/dist/jquery.min.js', 
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.js'
    ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery', // Assigning the $ and jQuery to jquery when bundle
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }), // for optimize the NODE_ENV=production webpack -p and avoid warning (this plugin comes with webpack)
     new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
      }
    })
  ],
  output: {
    path: __dirname + '/public', // it can also be './public'
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
    //with this we don't have t specify aliases everytime we create a new component
      'node_modules',
      './app/components', 
      './app/api'
    ],
    alias: {
      app: 'app',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  //this creates source maps of our components that the browser will understand
  //for debugging in browser
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map' 
};

