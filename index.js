const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("index.html", function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end;
        });
    } else if (req.url === "/about") {
        fs.readFile("about.html", function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end;
        });
    } else if (req.url === "/contact-me") {
        fs.readFile("contact-me.html", function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end;
        });
    } else {
        fs.readFile("404.", function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end;
        });
    }
});
server.listen(8080);
console.log("server running on port 8080");

