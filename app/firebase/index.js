import firebase from 'firebase';

// We use try catch to ensure this will be execute once
try {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6Q7hLhePSv6aaVGn0j-bw_1_KtFez_9o",
    authDomain: "luigi-react-todo.firebaseapp.com",
    databaseURL: "https://luigi-react-todo.firebaseio.com",
    storageBucket: "luigi-react-todo.appspot.com",
    messagingSenderId: "878569881137"
  };
  firebase.initializeApp(config);

} catch (e) {

}

export const firebaseRef = firebase.database().ref();

export default firebase;