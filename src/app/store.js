import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { firebaseReducer } from 'react-redux-firebase';

const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
    counter: counterReducer,
  },
});

export default store;
