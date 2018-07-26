const express = require('express');
require('dotenv').config();

const app = express();

//This will be the built production version when the app is launched on HEROKU
//app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res)=> res.send('HELLO TYPER'));

app.listen(process.env.PORT || 3001, ()=> console.log(`>App listening on port ${process.env.PORT}`))