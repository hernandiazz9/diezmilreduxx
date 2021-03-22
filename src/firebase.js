import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAzh_2kW5MMVQvUD5SNYMl8tXGOmHRPJSk",
  authDomain: "otrodiezmilv2.firebaseapp.com",
  projectId: "otrodiezmilv2",
  storageBucket: "otrodiezmilv2.appspot.com",
  messagingSenderId: "707067188353",
  appId: "1:707067188353:web:0a37754d9461816890a980"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase;