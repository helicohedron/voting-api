import bodyParser from 'body-parser';
import express from 'express';
import { connect } from 'mongoose';
import process from 'node:process';
import pollRoutes from './modules/polls/routes.js';

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = 'mongodb://localhost:27017/voting-api';

try {
  await connect(DB_URI);
} catch (error) {
  console.error('Unable to connect to database');
}

app.use(bodyParser.json());
app.set('port', PORT);

app.use('/api/v1/polls', pollRoutes);
// Add other routes

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
