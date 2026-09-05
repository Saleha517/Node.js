const express = require('express');
const app = express()
const port = 3000

// app.use((req, res, next) =>{
//     console.log("App level Middleware");
//     next();
// });

app.use(express.json());
function Login(res, req, next){
    console.log("Custom Middleware");
    // next();
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/profile', (req, res) => {
  res.send('Hello profile!');
});

app.get('/about', Login, (req, res) => {
  res.send('Hello about!');
});

app.get('/contact', (req, res) => {
  res.send('Hello contact!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});