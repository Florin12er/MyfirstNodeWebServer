import http from "http";
import fs from "fs";
import dotenv from "dotenv";
import axios from "axios";
import https from "https"

dotenv.config();
const port = process.env.PORT;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./index.html", (error, data) => {
        if (error) {
            res.writeHead(404);
            res.write("Error: File Not Found");
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, (error) => {
    if (error) {
        console.log("something is wrong", error);
    } else {
        console.log("Server is listening on port " + port);
    }
});

const data = JSON.stringify({
  todo: 'Buy the milk',
});

const options = {
  hostname: 'https://fake-store-10n47ew1g-florin12ers-projects.vercel.app',
  port: 443,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
