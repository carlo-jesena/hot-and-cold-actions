import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import Game from '../js/components/game';
import Form from '../js/components/form';

const should = chai.should();
let result;

describe('Form component', function () {

	beforeEach(() => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Form />);
		result = renderer.getRenderOutput();
	});

	it('Renders Form and its children', function() {
		const children = result.props.children;
		console.log(children);
		result.type.should.equal('div');
		// children.should.have.length(2);
		// result.props.children[0].should.be.an('object');
	});

});
