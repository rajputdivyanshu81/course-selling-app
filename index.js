const express = require('express');
const app = express();



app.post('/user/signup', (req, res) => {

});

app.post('/user/signin', (req, res) => {

});

app.get('/user/purchases', (req, res) => {

});

app.post('/course/purchase', (req, res) => {

});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});