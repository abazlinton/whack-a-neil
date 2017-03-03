import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Head from './Head'
import chai from 'chai'
import { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

it('calls passed function when head clicked on', () => {
	const spyFunc = sinon.spy();
	const wrapper = mount(<Head onWhac={spyFunc} height={259} top={0}> </Head>);
	wrapper.find('img').simulate('click');
	expect(spyFunc.callCount).to.equal(1);
});

it('sets containers width', () => {
	const wrapper = mount(<Head width={200} height={259} top={0}> </Head>);
	expect(wrapper.find('.container')).to.have.style('width', '200px')
});

it('sets containers height', () => {
	const wrapper = mount(<Head height={259} top={0}> </Head>);
	expect(wrapper.find('.container')).to.have.style('height', '259px')
});

it('sets containers top', () => {
	const wrapper = mount(<Head width={200} height={100} top={100}> </Head>);
	expect(wrapper.find('.container')).to.have.style('top', '200px')

})



