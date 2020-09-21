import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDqmKj3W0qYhdgMavat7vHm4F2GJ4BePN0",
    authDomain: "todo-app-5461f.firebaseapp.com",
    databaseURL: "https://todo-app-5461f.firebaseio.com",
    projectId: "todo-app-5461f",
    storageBucket: "todo-app-5461f.appspot.com",
    messagingSenderId: "360894651862",
    appId: "1:360894651862:web:ad4bea2f08cc0ccd30d877",
    measurementId: "G-9W2HLPDFZJ"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  const db = fire.firestore();
  export {db};