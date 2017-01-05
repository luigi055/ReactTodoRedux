import firebase from 'firebase';

// We use try catch to ensure this will be execute once
try {
    // Initialize Firebase
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

} catch (e) {

}

export const firebaseRef = firebase.database().ref();

export default firebase;