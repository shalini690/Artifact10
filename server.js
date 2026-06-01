const express = require('express');
const app = express();

// Listening port - configurable via the PORT environment variable, defaulting to 3000.
const PORT = process.env.PORT || 3000;

// Baseline tutorial endpoint: preserves the originally described behavior,
// returning the plain-text response "Hello world" for the root path.
app.get('/', (req, res) => {
  res.send('Hello world');
});

// New endpoint added per the feature request: returns the plain-text
// response "Good evening" so the tutorial now exposes a second route.
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Start the HTTP server and log the bound port for operator visibility.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
