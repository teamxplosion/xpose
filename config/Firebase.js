import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDrBNmAbpSucdz4dDq5ltYKwgmPFAauOoQ",
    authDomain: "xpose-ed35c.firebaseapp.com",
    databaseURL: "https://xpose-ed35c.firebaseio.com",
    projectId: "xpose-ed35c",
    storageBucket: "xpose-ed35c.appspot.com",
    messagingSenderId: "436147991715",
    appId: "1:436147991715:web:ac4e28f49917e573993b16",
    measurementId: "G-N5XJXSWLXM"
  };


const Firebase =  firebase.initializeApp(firebaseConfig);
  
export const db = firebase.firestore()


export default Firebase