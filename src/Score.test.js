import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Score from './Score'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { expect } from 'chai'

// const expect = require('chai').expect

chai.use(chaiEnzyme())

// import chai from 'chai'

it('shows passed score', () => {
	const wrapper = mount(<Score score={5}/>)
	expect(wrapper.find('#score')).to.have.text('5 WHACS!')
	
});