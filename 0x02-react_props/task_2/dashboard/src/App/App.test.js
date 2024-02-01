import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/footer';

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

  // it('renders a div with the class App-header', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('div.App-header').exists()).toBe(true);
  // });

  // it('renders a div with the class App-body', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('div.App-body').exists()).toBe(true);
  // });

  // it('renders a div with the class App-footer', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('div.App-footer').exists()).toBe(true);
  // });
});
