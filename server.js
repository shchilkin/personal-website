const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

//  Static files
app.use(express.static(path.join(__dirname, 'client/build')));

//  Production mode
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    })
}

//  Build mode
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

//  Start server
app.listen(port, (req, res) => {  console.log( `server listening on port: ${port}`);});


// //  Route setup
// app.get('/', (req, res) => {    res.send('root route');});

