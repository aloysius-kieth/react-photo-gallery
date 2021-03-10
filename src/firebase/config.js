import firebase from 'firebase/app';
import 'firebase/storage'; // storage
import 'firebase/firestore'; // DB

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAeAInJyzzmt3DM4Mq1otAZDGv_MHOLdK4',
  authDomain: 'react-photo-gallery-b3621.firebaseapp.com',
  projectId: 'react-photo-gallery-b3621',
  storageBucket: 'react-photo-gallery-b3621.appspot.com',
  messagingSenderId: '836799257435',
  appId: '1:836799257435:web:12b7b0b1982afddf3e587e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// init firebase storage
const storage = firebase.storage();

//init firebase firestore (DB)
const fireStore = firebase.firestore();

const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, fireStore, timeStamp };
