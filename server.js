// server.js


const http = require('http');
const port = 3000;


const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Basic Node.js Server!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found.');
  }
});


server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

