const express = require('express');
const app = express();

const NewMessage = (req, res, next) => {
  console.log("Yeni bir Request geldi");
  next();
};

const GetMessage = (req, res, next) => {
    console.log("Get Request atildi")
    next();
};

const PostMessage = (req, res, next) => {
  console.log("Post Request atildi");
  next();
};


app.use(NewMessage);


app.get('/index', GetMessage, (req, res) => {
  res.json("GET REQUEST ATILDI");
});

app.post('/index', PostMessage, (req, res) => {
  res.json("POST REQUEST ATILDI");
});

app.delete('/index', (req, res) => {
    res.json("DELETE REQUEST ATILDI");
  }); 

app.put('/index', (req, res) => {
  res.json("PUT REQUEST ATILDI");
});



app.listen(3001);