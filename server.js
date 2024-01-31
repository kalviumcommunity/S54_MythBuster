const express = require('express');
const mongoose = require('mongoose');
const { startDatabase, stopDatabase, isConnected } = require('./db');

const app = express();
const port = process.env.PORT || 5000;

async function start() {
  try {
    await startDatabase(); 

    app.get('/', (req, res) => {
      const connectionStatus = isConnected() ? 'Connected' : 'Disconnected';
      res.send(`Database connection status: ${connectionStatus}`);
    });


    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}

async function stop() {
  await stopDatabase();
}



start();
