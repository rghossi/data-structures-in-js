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

		it('should return 50', function() {
			for (let i=1;i<=50;i++) {
				stack.push(i);
			}
			var number = stack.pop();
			number.should.equal(50);
		})
	})

	describe ('push', function() {
		it('should push 1 to stack', function() {
			stack.push(1);
			stack.peek().should.equal(1);
		})

		it('should throw an error for integers < 0', function() {
			(() => stack.push(-1)).should.Throw(TypeError);
			(() => stack.push(-59)).should.Throw(TypeError);
		})

		it('should throw an error for non-integers', function() {
			(() => stack.push(-1.653)).should.Throw(TypeError);
			(() => stack.push("lalala")).should.Throw(TypeError);
			(() => stack.push([1,2,3])).should.Throw(TypeError);
			(() => stack.push({number: 1})).should.Throw(TypeError);
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