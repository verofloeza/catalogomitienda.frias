import 'io.invertase.firebase.messaging.RNFirebaseMessagingPackage';
import 'io.invertase.firebase.notifications.RNFirebaseNotificationsPackage';

import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBYb-sdFqtJ1HfinQpdTE3UP9AzGouBSlw",
    authDomain: "mitienda-reactnative.firebaseapp.com",
    databaseURL: "https://mitienda-reactnative-default-rtdb.firebaseio.com",
    projectId: "mitienda-reactnative",
    storageBucket: "mitienda-reactnative.appspot.com",
    messagingSenderId: "812189569021",
    appId: "1:812189569021:web:234f68c8c81a48400cd394"
  };
let app = Firebase.initializeApp(config);
// export const db = app.database();

export default app;