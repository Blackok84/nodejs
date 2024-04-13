const http = require("http");

let userCountRoot = 0;
let userCountAbout = 0;

const server = http.createServer((req, res) => {
  const count = 0;
  if (req.url === "/") {
    userCountRoot++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end(
      "<h1>Главная</h1>" +
        "<a href='/about'>Перейти на about </a>" +
        "Колличество просмотров:" +
        userCountRoot
    );
  } else if (req.url === "/about") {
    userCountAbout++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end(
      "<h1>aboud</h1>" +
        "<a href='/'>Перейти на Главнаю </a>" +
        "Колличество просмотров:" +
        userCountAbout
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end("<h1>Страница не найдена</h1>");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
