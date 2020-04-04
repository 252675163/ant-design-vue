const config = require('./build/webpack.build.conf');
const webpack = require('webpack');
console.log(config);
const compiler = webpack(config);
compiler.run();
