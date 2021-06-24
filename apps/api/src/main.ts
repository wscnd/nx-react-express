/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import {
  getAllGames,
  getGame
} from '@nx-react-express/db';

const app = express();

app.get('/api/games/:id', (req, res) => {
  res.json({ data: getGame(req.params.id) });
  res.end();
  // res.send({ message: 'Welcome to api!' });
});

app.get('/api/games', (req, res) => {
  res.send({ data: getAllGames() });
  res.end();
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
