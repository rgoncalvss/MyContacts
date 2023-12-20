const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started at port ${port}`));
