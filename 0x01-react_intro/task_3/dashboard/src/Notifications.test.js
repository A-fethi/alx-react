import { render } from '@testing-library/react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
    render(<Notifications />);
});

describe('<Notifications />', () => {
    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it('renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    });
});