import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correnctly increments the counter', () => {
    const wrapper = shallow(<CounterButton />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 1 });
    expect(wrapper.props().color).toEqual('red');
});
