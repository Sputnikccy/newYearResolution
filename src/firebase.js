import { initializeApp } from 'firebase/app';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyB-tWUkguGrBEHt0FZNFoVrVRIsufMJOc4",
    authDomain: "new-year-resolution-40576.firebaseapp.com",
    projectId: "new-year-resolution-40576",
    storageBucket: "new-year-resolution-40576.appspot.com",
    messagingSenderId: "174578005670",
    appId: "1:174578005670:web:45ba095f0f53502483a667"
};

// setting a variable that initializes our application
const firebase = initializeApp(config);
// this exports the CONFIGURED version of firebase
export default firebase;