const fs = require("fs");
const http = require("http");
const url = require("url");

// Get data from file
const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url, true).pathname;
  const laptopId = url.parse(req.url, true).query.id;

  if (pathName === "/products" || pathName === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("This is the Products page.");
  } else if (pathName === "/laptop" && laptopId < laptopData.length) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`This is the Laptop page for laptop ${laptopId}.`);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("This is the 404 page.");
  }
});

server.listen(1337, "127.0.0.1", () => {
  console.log("Listening for requests now.");
});
