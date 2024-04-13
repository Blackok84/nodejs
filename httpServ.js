const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end("<h1>Главная</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end("<h1>aboud</h1>");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end("<h1>Страница не найдена</h1>");
  }
});
