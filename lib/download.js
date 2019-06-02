const download = require('download-file')

const url = 'https://raw.githubusercontent.com/ianrose/resources/master/README.md'

const options = {
  directory: './src/',
  filename: 'resources.md'
}

download(url, options, function (err) {
  if (err) throw err
  console.log('Download file complete.')
})
