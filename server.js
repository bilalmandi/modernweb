const express = require('express');
const app = express();

/////mport routes 
const routes = require('./routes/routes');

////useroutes
app.use('/', routes);

/////startserver port 8000
app.listen(8000, () => {
  console.log('Server is running on port 8000 :)');
});
