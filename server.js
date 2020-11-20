const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }))
app.use(cors());

const routes = require('./routes/routes.js')(app);

const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});