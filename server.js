const express = require('express');
const app = express();
const PORT = 3000;

const games = [
  {
    id: 1,
    name: 'SuperTux',
    url: 'https://supertux.github.io/',
    image: 'https://supertux.github.io/assets/logo.png',
    download: 'https://download.supertux.org/'
  },
  {
    id: 2,
    name: 'Battle for Wesnoth',
    url: 'https://www.wesnoth.org/',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Battle_for_Wesnoth_Logo.png',
    download: 'https://www.wesnoth.org/downloads'
  },
  {
    id: 3,
    name: 'OpenRA',
    url: 'https://www.openra.net/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/OpenRA_Logo.png',
    download: 'https://www.openra.net/download/'
  }
];

// Serve static files from the 'public' folder
app.use(express.static('public'));

// API route to get the list of games
app.get('/games', (req, res) => {
  res.json(games);
});

// Endpoint to handle contact form submissions
app.post('/contact', express.json(), (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('Missing required fields');
  }

  // Log the submission to the console
  console.log(`New contact form submission:
    Name: ${name}
    Email: ${email}
    Message: ${message}`);

  res.status(200).send('Form submitted successfully');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
