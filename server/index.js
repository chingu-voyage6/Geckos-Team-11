const express = require('express');
require('dotenv').config();

const app = express();


//This will be the built production version when the app is launched on HEROKU
//app.use(express.static(path.join(__dirname, 'client/build')));

//::::: SHOULD HANDLE ALL HOME REQUEST
app.get('/', (req, res)=>{
    res.send('HELLO TYPER')
});

//::::: SHOULD HANDLE ALL BOARD REQUEST
app.get('/board', (req, res)=>{
    res.send({'board':'Success!'})
})

//::::: SHOULD HANDLE ALL PROFILE REQUEST
app.get('/profile', (req, res)=>{
    res.send({'profile':'Success!'})
})

//::::: SHOULD HANDLE ALL PRACTICE REQUEST
app.get('/practice', (req, res)=>{
    res.send({'practice':'Success!'})
})

app.listen(process.env.PORT || 3001, ()=> console.log(`>App listening on port ${process.env.PORT}`))