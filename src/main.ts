import http from 'http';

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write(`
<html>
  <body>
    <h1>Hello, Arno.</h1>
  </body>
</html>
`);
  res.write('<script>window._test = 1;</script>')
  setTimeout(() => {
    res.write('<script>window._test = 2;</script>');
  }, 1000)
  setTimeout(() => {
    res.write('<script>window._test = 3;</script>');
  }, 2000);
  setTimeout(() => {
    res.write('<script>window._test = 5;</script>');
    res.end();
  }, 5000);
});

server.on('error', (err: any) => {
  // wip
  console.error(err);
});

server.listen(3001, () => {
  console.log('Server listening on port 3001');
});
