import Rebase from 're-base';
import firebase from 'firebase';

// create the app
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAA6IJkiWTwBu6cdsiIDwUT5jZkmuNQFNQ",
    authDomain: "react-do-6f26b.firebaseapp.com",
    databaseURL: "https://react-do-6f26b.firebaseio.com"
});

// create the Rebase/Firebase binding
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
