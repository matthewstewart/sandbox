const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "OK"});
});

app.listen(3000, () => console.log('listening on localhost:3000'));

