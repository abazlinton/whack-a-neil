import React from 'react';
import { mount } from 'enzyme';
import App from './App';

it('score is increased by 1!', () => {
	const wrapper = mount(<App/>);
 	const instance = wrapper.instance()
	instance.onWhac()
	expect(instance.state.score).toBe(1);
});