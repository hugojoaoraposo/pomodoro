// app.js

const express = require('express');
const mongoose = require('mongoose');
const Pomodoro = require('./pomodoro');

mongoose.connect('mongodb://localhost/pomodoroDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());

// criando Pomodoro
app.post('/pomodoros', (req, res) => {
  const { startTime, endTime, taskName } = req.body;

  const pomodoro = new Pomodoro({
    startTime,
    endTime,
    taskName,
  });

  pomodoro.save()
    .then((savedPomodoro) => {
      res.json(savedPomodoro);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
