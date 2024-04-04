const { readFile } = require('fs').promises

const start = async () => {
    try {
      const first = await readFile('./content/first.txt' , 'utf-8');
      const second = await readFile("./content/second.txt", 'utf-8');
      console.log(first,second);
    } catch (error) {
      console.log(error);
    }
  }



start()







//workings

// const { readFile } = require("fs");
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// console.log("started a first task");

// // getText("./content/first.txt")
// //   .then((result) => console.log(result))
// //   .catch((err) => console.log(err));

// // console.log('waiting')

// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first,second);
//   } catch (error) {
//     console.log(error)
//   }
// };

// start();
// console.log("Starting next task");



