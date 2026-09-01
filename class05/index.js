// const EventEmitter = require("events");

// const myEvent = new EventEmitter();

// myEvent.on("greeting", (name) => {
//     console.log(`Hello ${name}!`);
// });

// myEvent.emit("greeting", "Saleha");

const fs = require("fs");

const readStream = fs.createReadStream("input.txt", "utf8");

readStream.on("data", (chunk) =>{
    console.log("Chunk:", chunk);
});

readStream.on("end", () => {
    console.log("Reading Compelete!!");
});