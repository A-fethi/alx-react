import { render } from '@testing-library/react';
import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
    render(<Notifications />);
});

describe('<Notifications />', () => {
    it('renders three list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });

    it('renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toBe('Your notifications');
    });

    it('displays the menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('does not display div.Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('displays the menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('displays div.Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('.Notifications')).toHaveLength(1);
    });
});