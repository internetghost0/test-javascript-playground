const { readFileSync, writeFileSync } = require("fs")
// const fs = require('fs')
// const readFileSync = fs.readFileSync

console.log("start")
const first = readFileSync("./content/first.txt", "utf-8")
const second = readFileSync("./content/second.txt", "utf-8")

console.log(first)
console.log(second)

writeFileSync(
    "./content/result-sync.txt",
    `Here is the result : '${first}', '${second}'\n`,
    { flag: "a" }
)
console.log("done with this task")
console.log("starting next task...")
