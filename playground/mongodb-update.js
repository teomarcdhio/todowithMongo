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

//Find one and update

// db.collection('User').findOneAndUpdate({_id: new ObjectID('5a89b483f6de9686fd155d5d')},
// {$unset: {text: "" }},
// {returnOriginal : false})
// .then((result) => {console.log(result);});

db.collection('User').findOneAndUpdate({_id: new ObjectID('5a89acf0900b8d27732b5e86')},
{$inc: {age: -20}}, {returnOriginal: false})
.then((result) => {
  console.log(result);
});

  client.close();
});
