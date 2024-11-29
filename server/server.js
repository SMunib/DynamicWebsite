const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/greeting', (req, res) => {
  const hours = new Date().getHours();
  const greetingMessage = hours < 12 ? 'Good Morning!' : hours < 18 ? 'Good Afternoon!' : 'Good Evening!';
  res.json({ greeting: greetingMessage });
});

if (require.main === module) {
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
}

module.exports = app;
