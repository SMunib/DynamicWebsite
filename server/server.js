const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Example API route to send dynamic data
app.get('/api/greeting', (req, res) => {
  const hours = new Date().getHours();
  let greetingMessage;

  if (hours < 12) {
    greetingMessage = 'Good Morning!';
  } else if (hours < 18) {
    greetingMessage = 'Good Afternoon!';
  } else {
    greetingMessage = 'Good Evening!';
  }

  res.json({ greeting: greetingMessage });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
