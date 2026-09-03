const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Hello Nodejs Server</h1>");
    }

    else if (req.url === "/about") {
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>This is about page</h1>");
    }

    else if (req.url === "/contact") {
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>This is contact page</h1>");
    }

    else if (req.url === "/services") {
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>This is services page</h1>");
    }

    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});