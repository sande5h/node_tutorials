//globals - no window 
//__dirname  - path to current directory
// __filename = file name
// require  - function to use modules (commonJS)
//module  - info about current modules (file)
//process  - info about env where the program is being executed

console.log()
setInterval(() => {
    console.log("Hello")
}, 1000);
setTimeout(() => {
    console.log("hello World")
}, 1000);