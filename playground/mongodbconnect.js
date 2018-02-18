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
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     console.log(`Couldnt insert ${err}`);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('User').insertOne({
  //   name: 'Matteo',
  //   age: 39,
  //   location: 'UK'
  // }, (err, result) => {
  //   if (err) {
  //     console.log(`Couldn't add a user; ${err}`);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });
  client.close();
});
