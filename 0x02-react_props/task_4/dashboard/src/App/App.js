import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Proptypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
        <div>
          <Header />
        </div>
        <div>
          { isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <div>
          <Footer />
        </div>
    </>
  );
}

App.defaultProps = { isLoggedIn: false, };
App.proptypes = { isLoggedIn: Proptypes.bool, };

export default App;
