const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Disable Express header
app.disable('x-powered-by');

// Extra precaution: remove it manually
app.use((req, res, next) => {
  res.removeHeader("X-Powered-By");
  next();
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => console.log(`Examples app listening on port ${port}!`));
