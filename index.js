const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Factorial calculator 🎊' });
});

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Resource not found.' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));