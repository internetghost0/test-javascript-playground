const path = require("path")

// path.sep: separator of path of your OS
console.log(path.sep)
// output: '/'

// path.join: concatanete a strings to build path
const filePath = path.join("content", "subfolder", "test.txt")
console.log(filePath)
// output: 'content/subfolder/test.txt'

// path.basename: basename of path
const base = path.basename(filePath)
console.log(base)
// output: 'test.txt'

// path.resolve: concatenate a strings and return absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute)
// output: '/home/user/coding/test-javascript-playground/content/subfolder/test.txt'
