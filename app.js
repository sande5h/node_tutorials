// npm -- global comes with code 

// package.json -- manifest File

// npm init 
// npm init -y

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems);