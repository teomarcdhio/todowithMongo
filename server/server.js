var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/users.js');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.listen(3000, () => {
  console.log('App started on port 3000!');
});

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {

});

// var NewTodo = new Todo({
//   text: 'cook dinner'
// });

// var NewTodo = new Todo({
//   text: '  Another supper'
// });
//
// NewTodo.save().then((doc) => {
//   console.log(`Saved! ${doc} `);
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save');
// });

// var NewUser = new User({
//   email: 'gino@gmail.com'
// });
//
// NewUser.save().then((doc) => {
//   console.log(doc);
// }, (e) => {
//   console.log(e);
// });
