import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <>
      <Notifications />
        <div>
          <Header />
        </div>
        <div>
          <Login />
        </div>
        <div>
          <Footer />
        </div>
    </>
  );
}

export default App;
