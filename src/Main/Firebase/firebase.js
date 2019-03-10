import firebase from 'firebase';

const  config = {
    apiKey: "AIzaSyDSgTA9bajeU3wZAqnPTL5kq8JOOvpa7hE",
    authDomain: "ayush-1560b.firebaseapp.com",
    databaseURL: "https://ayush-1560b.firebaseio.com",
    projectId: "ayush-1560b",
    storageBucket: "",
    messagingSenderId: "661607172703"
  };
  firebase.initializeApp(config);

  export default firebase;