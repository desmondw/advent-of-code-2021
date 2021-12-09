const fs = require('fs')

let data = fs.readFileSync('example.txt', 'utf8').split('\n') //.map(v=>parseInt(+v, 2))
// let data = fs.readFileSync('input.txt', 'utf8').split('\n')
console.log(data)

let freq = Array(data[0].length).fill(0)
// console.log(freq)

let gamma, epsilon

for (let i=0; i<data.length; i++) {
  let vals = data[i].split('').map(v=>+v)
  // console.log(vals)
  freq = freq.map((v,i)=>v+vals[i])
}

let freqBinary = parseInt(freq.map(v=>(v>=data.length/2)?1:0).join(''), 2)
let freqBinaryInv = ~ 5
console.log('5'.toString(2))
// let result = freqBinary * freqBinaryInv

// console.log(freq)
// console.log(freqBinary)
// console.log(freqBinaryInv)
// console.log(typeof freqBinary)

// console.log(result)
