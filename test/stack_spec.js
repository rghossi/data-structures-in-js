import chai from 'chai';
import Stack from '../src/Stack.js'

const should = chai.should();

describe ('Stack', function() {

	let stack = new Stack;

	beforeEach(function() {
		stack = new Stack();
	})
	
	describe('peek', function() {
		it('should return -1 for empty stack', function() {
			var number = stack.peek();
			number.should.equal(-1);
		})
	})

	describe('pop', function() {
		it('should return -1 for empty stack', function() {
			var number = stack.pop();
			number.should.equal(-1);
		})
	})

	describe ('push', function() {
		it('should push 1 to stack', function() {
			stack.push(1);
			stack.peek().should.equal(1);
		})
	})

	describe ('displayAll', function() {
		it('should display empty stack', function() {
			var result = stack.displayAll();
			result.should.equal("Empty stack!");
		})

		it('should display 3 2 1', function() {
			stack.push(1);
			stack.push(2);
			stack.push(3);
			var result = stack.displayAll();
			result.should.equal("3 2 1");
		})
	})
	
});