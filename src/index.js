const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started at port ${port}`));
