const fs = require("fs");

fs.readFile("info.txt", "utf-8", (err, data) => {
  if (err) return console.error(err);
  console.log("File Data:", data);
});

fs.writeFile("info.txt", "Hello Node.js!", (err, datafromwrite) => {
  if (err) {
    throw err;
  }
  console.log("data", datafromwrite);
});

fs.appendFile("info.txt", "\nAdditional line...", (err) => {
  if (err) {
    throw err;
  }
  console.log("data");
});

const writeStream = fs.createWriteStream("info.txt");
writeStream.write("Patil\n");
writeStream.write("P");

const readStream = fs.createReadStream("info.txt", 'utf-8');
readStream.on("data",(item)=>{
    console.log("item",item);
    
    readStream.on('end', () => {
  console.log("Finished reading file");
});
})

//    Pipe Example (Read → Write)

// const read = fs.createReadStream('source.txt');
// const write = fs.createWriteStream('copy.txt');

// read.pipe(write);


// const fs = require("fs").promises;

// async function readFile() {
//   try {
//     const data = await fs.readFile("info.txt", "utf-8");
//     console.log("files",data);
//   } catch (err) {
//     console.error(err);
//   }

// }
// readFile();
