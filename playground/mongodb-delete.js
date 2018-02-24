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


//Delete many
  // db.collection('Todos').deleteMany({text:'And another task'}).then((result) => {
  //   console.log(result);
  // });

//Delete One
  // db.collection('Todos').deleteOne({text: 'Some more to delete'}).then((result) => {
  //   console.log(result);
  // });

//FindOneAndDelete
  db.collection('Todos').findOneAndDelete({complete: true}).then((result) => {
    console.log(result);
  });

  client.close();
});
