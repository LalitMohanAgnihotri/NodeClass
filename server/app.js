import http from "http";
import fs from "fs";

const server = http.createServer((request, response) => {
  const reqUrl = request.url;
  const logContent = `${new Date().toISOString()} - ${reqUrl}\n`;

  
  fs.appendFile("log.txt", logContent, (err) => {
    if (err) {
      console.error("Error writing to log:", err);
    } else {
      console.log("Logged:", logContent.trim());
    }
  });

  response.setHeader("Content-Type", "text/plain");

  if (reqUrl === "/") {
    response.end("it's working");
  } else if (reqUrl === "/home") {
    response.end("welcome to home page");
  } else if (reqUrl === "/about") {
    response.end("why do you want to know about me");
  } else {
    response.statusCode = 404;
    response.end("Page not found");
  }
});
server.listen(8000);
