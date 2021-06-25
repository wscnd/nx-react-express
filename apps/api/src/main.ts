/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { Request } from 'express-serve-static-core';

import {
  getAllGames,
  getGame
} from '@nx-react-express/db';

const app = express();

app.get('/', (req, res) => {
  res.redirect('/api');
});

app.get('/api', (req, res) => {
  res.send({ data: { routes: ['/api/games/search?=$id', '/api/games'] } });
});

app.get(
  '/api/games/search',
  (req: Request<unknown, unknown, unknown, { id: string }>, res) => {
    const query = (req.query.id || '').toLowerCase();
    const search = query.length ? getGame(query) : getAllGames();
    res.json({ data: search });
    res.end();
  }
);

app.get('/api/games', (req, res) => {
  res.send({ data: getAllGames() });
  res.end();
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
