const express = recquire('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=> { 
    res.end('Hello World');
});

app.get('/about', (req, res)=> { 
    res.end('Hello World');
});

app.get('/contact', (req, res)=> { 
    res.end('Hello World');
});

app.listen(port, () => {
    console.log(`App is Running on port ${port}`);
});