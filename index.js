var sass = require('node-sass');
var fs = require('fs');

sass.render({
  file: './blocks.scss',
  outFile: './blocks.css'
}, function(err, result) {
  if(!err) {
    fs.writeFile('./blocks.css', result.css, function(err){
      if(!err){
        console.log('COMPLETE');
      }
    });
  }
});