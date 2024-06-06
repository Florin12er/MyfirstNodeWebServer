// console.log(global)

global.setTimeout(() => {
    console.log("Hello florin")
    clearInterval(int)
},3000)

const int = setInterval(() => {
console.log("Romania")
}, 100)

console.log("Global Path:",__dirname,"file Path:", __filename)
