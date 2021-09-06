import React from 'react';

import './App.css';
import AuthProvider from './components/AuthProvider';
import Register from './pages/Register';
import Chat from './pages/Chat';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
          <AuthProvider redirectComponent={<React.Fragment><Register /><Login /></React.Fragment>}>
            <Chat />
          </AuthProvider>
    </div>
  );
}

export default App;
