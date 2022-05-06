const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(__dirname).filter((name) => name !== 'index.js')

module.exports = files.map((f) => require(path.join(__dirname, f)))
