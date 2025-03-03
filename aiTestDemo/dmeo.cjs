const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Transfer-Encoding': 'chunked' });

  res.write('第一部分\n');
  setTimeout(() => {
    res.write('第二部分\n');
    setTimeout(() => {
      res.end('第三部分\n');
    }, 1000);
  }, 1000);
}).listen(3000);