var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
      if (path.extname(file) === '.' + process.argv[3])
        console.log(file)
    })
    if (err) {
        return console.log(err)
      }
  })
  //extname: returns the part of a string that comes after the final period (fullstop),
  // including the period itself.