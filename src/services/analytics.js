import 'firebase/analytics';
import firebase from 'firebase/app';

export const registerLogin = (email) => {
  firebase.analytics().logEvent('login', { email } )
}