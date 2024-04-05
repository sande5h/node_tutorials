const path = require('path')

console.log(path.sep);

const filePath = path.join ('content' , 'subfolder','text.txt')
console.log(filePath)
console.log(path.basename(filePath))

const absolute = path.resolve(__dirname , filePath)
console.log(absolute);