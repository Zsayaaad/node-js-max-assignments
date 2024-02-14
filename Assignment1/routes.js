const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><h1>Welcome In Assignment 1</h1></body>');

    res.write(
      '<body><form action="/create-user" method ="POST"><input name="username" type="text"><button type="submit">Send</button></input></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write(
      '<body><ul><li>User 1</li><li>User 2</li> <li>User 3</li></ul></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedData = Buffer.concat(body).toString();
      console.log(parsedData.split('=')[1]);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
};

module.exports = requestHandler;
