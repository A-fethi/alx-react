import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Proptypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

function App({ isLoggedIn }) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available' },
    {id: 2, type: 'urgent', value: 'New resume available' },
    {id: 3, type: 'urgent', html: getLatestNotification() },
  ];

  return (
    <>
      <Notifications listNotifications={listNotifications} />
        <div>
          <Header />
        </div>
        <div>
          { isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </div>
        <div>
          <Footer />
        </div>
    </>
  );
}

App.defaultProps = { isLoggedIn: true, };
App.proptypes = { isLoggedIn: Proptypes.bool, };

export default App;
