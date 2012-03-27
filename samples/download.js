// download the google logo image as base64

var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});

casper.start('http://www.google.fr/', function(self) {
    self.download('http://www.google.fr/images/srpr/logo3w.png', 'logo.png');
    self.echo('logo saved in logo.png');
});

casper.run();
