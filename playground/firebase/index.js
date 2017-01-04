import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6Q7hLhePSv6aaVGn0j-bw_1_KtFez_9o",
    authDomain: "luigi-react-todo.firebaseapp.com",
    databaseURL: "https://luigi-react-todo.firebaseio.com",
    storageBucket: "luigi-react-todo.appspot.com",
    messagingSenderId: "878569881137"
  };
  firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();

// the set method is used to set new items. it will overide or delete 
// existing values when u add new items
// MOST OF THE FIREBASE METHODS  RETURNS A PROMISE
// IT IS NOT NECESARY TO CREATE PROMISES IN NEITHER METHOD OF FIREBASE
firebaseRef.set({
  app: {
    name: 'Todo Application',
    version: '1.0.2'
  },
  isRunning: true,
  user: {
    name: 'luigi',
    age: 26
  }
}).then(() => {
  console.log('Set works');
}, e => {
  console.log('Set failed')
});

// firebaseRef.set({
//   appName: 'Todo Application'
// });

//wil override the object inside user and you can set new values
// firebaseRef.child('user').set({
//   name: 'pier'
// });

// firebaseRef.child('app').set({
//   name: 'Todo App'
// });

// --- Updating database ---
// it updates just first level nested properties so if u try to update 
// for example the name inside the app property it will delete version
// There are two ways of doing this 
//multipath update
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo App' //multiáth update
// });

// the second way is with child
// firebaseRef.child('app').update({
//   version: '1.0.3'
// }).then(() => {
//   console.log('updated Successfully');
// }, e => {
//   console.log('update failed');  
// });


// firebaseRef.update({
//   'app/name': 'Todo App',
//   'user/name': 'Pier'
// }).then(() => {
//   console.log('updated sucessfully');
// }, e => {
//   console.log('update failed');
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('app name change to Todo Application');
// }, e => {
//   console.log('update failed to change to Todo Application');
// });

// firebaseRef.child('user').update({
//   name: 'Pedro'
// }).then(() => {
//   console.log('username changed to pedro');
// }, e => {
//   console.log('update failed to pedro');
// });

// --- removing items ---
//firebaseRef.remove(); // removes everything

// this removes the name property in app
// firebaseRef.child('app/name').remove(); 
// better aproach of use remove is just use update with the null value
// This does the same as using remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null // this will remove name in firebase
// });

// firebaseRef.child('isRunning').remove();

// --- Fetching data ---
// this also returns a promise
// firebaseRef.once('value').then(snapshot => {
//   console.log('Got entire database', snapshot.val());
// }, e => {
//   console.log('unable to fetch value', e)
// });

// firebaseRef.child('app').once('value').then(snapshot => {
//   console.log('Got entire database', snapshot.val());
// }, e => {
//   console.log('unable to fetch value', e)
// });

// .on() listens more than one
// const logData = snapshot => {
//   console.log('Got value', snapshot.val());
// };

// firebaseRef.on('value', logData);

// turnning off our .on()
// firebaseRef.off(); //everysingle eventlistener will be remove
// firebaseRef.off(logData); //just logData eventlistener will be remove

//this will log again cos snapsot of .on() is listening
// if .off() is before it will stop listenning from .on method
// firebaseRef.update({isRunning: false}); 

// challenge
// firebaseRef.child('user').on('value', snapshot => {
//   console.log('listening to user', snapshot.val());
// });

// firebaseRef.update({'user/name': 'Pier'});

// //we won't see changes in app cos just user is being listenning
// firebaseRef.child('app').update({name: 'something else'}); 

// --- WORKING WITH ARRAYS ---
//firebase dont work with arrays so we have to replace out brackets for curly braces in todos and each todo assign a unique id

//this create an type of array in firebase which creates an unique id as
// property and the value within curly braces
const todosRef = firebaseRef.child('todos');

const newTodoRef = todosRef.push();

// everytime a new child will be added, changed or removed in notes
// this events will do something
todosRef.on('child_added', snapshot => {
  console.log('child_added', snapshot.key, snapshot.val());
});
todosRef.on('child_changed', snapshot => {
  console.log('child_changed', snapshot.key, snapshot.val());
});
todosRef.on('child_removed', snapshot => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

newTodoRef.set({
  text: 'watch a pair of episodes of dragon ball z super'
});
todosRef.push({
  text: 'play league of legends'
});
// syntactic sugar
//1. todosRef.push().set({text: 'walk the dog'});
//2. todosRef.push({text: 'walk the dog'});
console.log('todo id', newTodoRef.key); //the key generated by firebase


