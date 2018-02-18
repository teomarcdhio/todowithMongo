//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//ES6 deconstructing
// var user = {name:'Matteo', age: 39};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if (err) {
    console.log('Unable to connect');
  }
  console.log('Successfully connected');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({completed: false, text: 'Some new task'}).toArray().then((docs) => {
  //   console.log('Todo list');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todo list count: ${count}`);

  }, (err) => {
    console.log(err);
  });

  client.close();
});
