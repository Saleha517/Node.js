const express = require('express');
const app = express();
const port = 3000;

// app.get("/name/:username", (req, res) => {
//     const username = req.params.username
//     res.send(`Hello ${username}`);
// });

function Validate(req, res, next){
    const id = parseInt(req.params.id);
    if(Number.isNaN(id) || id <= 0){
        return res.status(400).json({
            success: false,
            error : "Invalid Id",
        });
    }
    next();
}

app.get("/product/:id", Validate, (req, res, next) => {
    const productId = parseInt(req.params.id);
    console.log(productId);
    if(productId !== 1){
        const err = new Error ("Product not Found");
        err.status = 404;
        return next(err);
    }
    res.json({
        id: productId,
        name: "same product"
    });
});
app.use(express.json());
function Login(res, req, next){
    console.log("Custom Middleware");
    next();
}

app.get('/', (req, res) => {
  res.send('Hello World!');
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