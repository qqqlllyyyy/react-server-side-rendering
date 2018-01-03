module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/, // Apply babel to only js files
        loader: 'babel-loader', // Webpack loader to transpile files
        exclude: /node_modules/,
        options: {
          presets: [
            'react',   // Translate JSX files
            'stage-0', // Take some async codes
            ['env', { target: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
};