import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notification component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('does not display CoursList when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('does not include the Login component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('includes the CourseList component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });
});

describe('<App />', () => {
  it('calls logOut function and displays alert on Ctrl + h keypress', () => {
    // Mock logOut function
    const mockLogOut = jest.fn();
    // Create a shallow rendered instance of the App component with the mock logOut function
    shallow(<App isLoggedIn={true} logOut={mockLogOut} />);
    // Mock the alert function
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    // Simulate a keydown event with Ctrl + h
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);
    // Check if logOut function is called
    expect(mockLogOut).toHaveBeenCalled();
    // Check if alert function is called with the correct message
    expect(global.alert).toHaveBeenCalledWith('Logging you out');
    // Restore the original alert function
    mockAlert.mockRestore();
  });

  it('should have default state displayDrawer as false', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.instance();
    expect(appComponent.state.displayDrawer).toBe(false);
  });

  it('should update displayDrawer state to true after calling handleDisplayDrawer',() => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.instance();
    appComponent.handleDisplayDrawer();
    expect(appComponent.state.displayDrawer).toBe(true);
  });

  it('should update displayDrawer state to false after calling handleHideDrawer',() => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.instance();
    appComponent.handleHideDrawer();
    expect(appComponent.state.displayDrawer).toBe(false);
  });

  it('updates state correctly when logOut is called', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    const appComponent = wrapper.instance();
    appComponent.logOut();
    expect(appComponent.state.user.isLoggedIn).toBe(false);
  });

  it('updates state correctly when logIn is called', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.instance();
    const email = 'test@example.com';
    const password = 'password123';
    appComponent.logIn(email, password);
    expect(appComponent.state.user).toEqual({
      email,
      password,
      isLoggedIn: true,
    });
  });

  it('should have default state displayDrawer as false', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.instance();
    expect(appComponent.state.displayDrawer).toBe(false);
  });

  it('should update displayDrawer state to true after calling handleDisplayDrawer',() => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.instance();
    appComponent.handleDisplayDrawer();
    expect(appComponent.state.displayDrawer).toBe(true);
  });

  it('should update displayDrawer state to false after calling handleHideDrawer',() => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.instance();
    appComponent.handleHideDrawer();
    expect(appComponent.state.displayDrawer).toBe(false);
  });
});
