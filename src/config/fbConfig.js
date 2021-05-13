import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyAYFHbhiTO_u2kBgOOvuZKIW93orkDEG7c",
    authDomain: "webshop-test-40b3c.firebaseapp.com",
    projectId: "webshop-test-40b3c",
    storageBucket: "gs://webshop-test-40b3c.appspot.com",
    messagingSenderId: "284298191487",
    appId: "1:284298191487:web:e07910ef34757e5015d54a",
    measurementId: "G-7KY9VPMJN6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  var db = firebase.firestore();
  var projectStorage = firebase.storage();
  export {projectStorage};
  export default db