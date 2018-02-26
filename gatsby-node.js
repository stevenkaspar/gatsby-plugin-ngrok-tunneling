var ngrok = require('ngrok');
var argv = require('minimist')(process.argv.slice(2));
var chalk = require('chalk');

var DEFAULT_OPTIONS = {
  proto: 'http',
  addr:  argv.p ? argv.p : 8000,
}

exports.onPreBootstrap = (_, options) => {
  var ngrokOptions = Object.assign({}, DEFAULT_OPTIONS, options !== undefined ? options : {});
  return new Promise( (resolve, reject) => {
    if ((process.env.TUNNELING === 'true' || process.env.NODE_ENV !== 'production') && process.env.TUNNELING !== 'false') {
      ngrok.connect(ngrokOptions, (err, url) => {
        if (err) {
          return reject(err);
        }
        console.log(`
${chalk.green('success')} tunneling available at => ${chalk.bold(url)}`);
        resolve();
      });
    }
    else {
      resolve();
    }
  });
}
