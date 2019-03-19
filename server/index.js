const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('home');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`is on port ${PORT} now...`);
});
