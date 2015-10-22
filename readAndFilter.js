var fs = require('fs')

module.exports = function (directory, fileExtension, callback) {
    fs.readdir(directory, function doneReading(err, fileArrayList) {
        if (err)
            return callback(err)
        filteredList = fileArrayList.filter(function (item) {
            return item.split(".")[1] === fileExtension
        })
        callback(null, filteredList)
    })
}
