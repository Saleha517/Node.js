const fs = require("fs");

// fs.writeFile("example.txt", "this is the file", (err) => {
//     if(err){
//         console.error("File not created", err);
//     } console.log ("File Created");
// });

// fs.readFile("example.txt", "\nthis is third line", (err) => {
//     if(err){
//         console.error("File Error", err);
//     } else {
//         console.log (data);
//     }
// });

// fs.appendFile("example.txt", "\nthis is third line", (err) => {
//     if(err){
//         console.error("File Error", err);
//     } else {
//         console.log ("File Updated!!");
//     }
// });

fs.unlike("index.html", (err) => {
    if (errr) {
        console.error("File error", err);
    } else {
        console.log ("File Deleted");
    }
});