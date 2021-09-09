import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import { firebaseReducer } from "react-redux-firebase";

import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';

import selectedContactReducer from '../features/selectedContact/selectedContactReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,  
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// const rrfConfig = {
  // userProfile: 'users',
  // presence: 'presence',
  // sessions: 'sessions',
  // profileParamsToPopulate:[
  //     'contacts:users'
  // ],
  // useFirestoreForProfile: true,
// }
const rrfConfig = {
  userProfile: 'users',
  // presence: 'presence',
  // sessions: 'sessions',
  profileParamsToPopulate:[
      'contacts:users'
  ],
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  selectedcontact: selectedContactReducer
});

const initialState = {}
const isDev = process.env.REACT_APP_ENV !== 'production';

// const store = createStore(rootReducer, initialState, isDev)

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false}), sagaMiddleware]
const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    selectedcontact: selectedContactReducer
  },
  middleware,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: isDev
})

sagaMiddleware.run(rootSaga);

export const rrfProps = {
  firebase, 
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

export default store;
