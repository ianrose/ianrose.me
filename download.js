var download = require('download-file')

var url = "https://raw.githubusercontent.com/ianrose/resources/master/README.md"

var options = {
    directory: "./src/",
    filename: "resources.md"
}

download(url, options, function(err){
    if (err) throw err
    console.log("Download file complete.")
})