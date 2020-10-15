///////firebaseconfig///////////
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "my secret key",
  authDomain: "mgun-rn-auth.firebaseapp.com",
  databaseURL: "https://mgun-rn-auth.firebaseio.com",
  projectId: "mgun-rn-auth",
  storageBucket: "mgun-rn-auth.appspot.com",
  messagingSenderId: "my secret key",
  appId: "ididid "
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
///////////////////////////////////

export const firebaseReq = async (type, email, password) => {
  const func = (type == 'signup') ?
    auth.createUserWithEmailAndPassword(email, password) :
    auth.signInWithEmailAndPassword(email, password);
  try {
    const res = await func;
    const token = await auth.currentUser.getIdToken(true)
    const response = { user: res.user, token }
    //console.log(response);
    return response;

  } catch (error) {
    const err = error.toString().slice(7, -1);
    //console.log(err);
    return err;

  };
};

////

// export const oAuth = async (type) => {
//   // Using a popup.
//   const provider = new firebase.auth.GoogleAuthProvider();
//   provider.addScope('profile');
//   provider.addScope('email');
//   const res = await auth.signInWithPopup(provider)
//   console.log(res);
//   //  // This gives you a Google Access Token.
//   //  var token = result.credential.accessToken;
//   //  // The signed-in user info.
//   //  var user = result.user;
// };



