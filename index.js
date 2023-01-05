const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Factorial calculator 🎊' });
});

app.get('/docs', (req, res) => {
  const { host } = req.headers;
  res.status(200).json({
    message: 'Documentation',
    request: `http://${host}/factorial/<number>`,
    response: 'The factorial of <number> is <result>',
    example: {
      request: `http://${host}/factorial/5`,
      response: 'The factorial of 5 is 120',
    }
  })
})

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Resource not found.' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));