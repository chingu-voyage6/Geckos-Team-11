const express = require('express');
const app = express();

app.get('/', (req, res)=> res.send('HELLO TYPER'));

app.listen(process.env.PORT || 3001, ()=> console.log('>App listening on port 3000'))