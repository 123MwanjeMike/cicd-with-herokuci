const express = require('express');
const factorial = require('./factorial');

const app = express();

app.get('/', (req, res) => {
  const { host } = req.headers;
  res.status(200).json({ message: 'Welcome to the Factorial calculator 🎊', docs: `${host}/docs` });
});

app.get('/docs', (req, res) => {
  const { host } = req.headers;
  res.status(200).json({
    message: 'Documentation',
    request: `${host}/factorial/<number>`,
    response: 'The factorial of <number> is <result>`',
    example: {
      request: `${host}/factorial/5`,
      response: 'The factorial of 5 is 120`',
    },
  });
});

app.get('/factorial/:number', (req, res) => {
  const { number } = req.params;
  if (isNaN(number)) return res.status(400).json({ message: `'${req.params.number}' is not a number.` });
  if (number > 200) return res.status(200).json({ message: `The factorial of ${number} is Infinity` });
  return res.status(200).json({ message: `The factorial of ${number} is ${factorial(number)}` });
});

app.get('*', (req, res) => {
  const { host } = req.headers;
  res.status(404).json({ message: 'Resource not found.', docs: `${host}/docs` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
