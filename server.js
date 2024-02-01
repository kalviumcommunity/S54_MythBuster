const express = require('express');
const mongoose = require('mongoose');
const { startDatabase, stopDatabase, isConnected } = require('./db');
const { connectToMongoDB, getMythData, findMythById, addMyth, updateMythById, deleteMythById } = require('./routes/routes');

const app = express();
const port = process.env.PORT || 5000;

app.get('/myths', async (req, res) => {
  try {
    const myths = await getMythData(); 
    res.send({ data: myths }); 
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

app.get('/myths/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const myth = await findMythById(id);
    if (myth) {
      res.send({ data: myth });
    } else {
      res.status(404).send({ error: 'Myth not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

app.post('/myths', async (req, res) => {
  try {
    const newMyth = await addMyth(req.body); 
    res.send({ data: newMyth });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

app.patch('/myths/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updatedMyth = await updateMythById(id, req.body); 
    if (updatedMyth) {
      res.send({ data: updatedMyth });
    } else {
      res.status(404).send({ error: 'Myth not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

app.delete('/myths/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedMyth = await deleteMythById(id); 
    if (deletedMyth) {
      res.send({ data: deletedMyth });
    } else {
      res.status(404).send({ error: 'Myth not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

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
