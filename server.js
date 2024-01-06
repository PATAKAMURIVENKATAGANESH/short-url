const express = require('express');
const bodyParser = require('body-parser');
const { createConnection } = require('typeorm');
const { ShortUrlController } = require('./short-url/short-url.controller');
const { UserController } = require('./user/user.controller');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Set up TypeORM with PostgreSQL
createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'username',
  password: 'password',
  database: 'database',
  synchronize: true,
  entities: [
    // Add your entity classes here
  ],
}).then(() => {
  // Routes
  app.use('/short-url', ShortUrlController);
  app.use('/user', UserController);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch(error => console.log('TypeORM connection error: ', error));
