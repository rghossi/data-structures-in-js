import chai from 'chai';
import Queue from '../src/Queue.js'

const should = chai.should();

describe ('Queue', function() {

	let queue = new Queue();

	beforeEach(function() {
		queue = new Queue();
	})
	
	describe('peek', function() {
		it('should return -1 for empty queue', function() {
			queue.peek().should.equal(-1);
		})
	})

	describe('dequeue', function() {
		it('should return -1 for empty queue', function() {
			queue.dequeue().should.equal(-1);
		})

		it('should return 1', function() {
			for (let i=1;i<=50;i++) {
				queue.enqueue(i);
			}
			var number = queue.dequeue();
			number.should.equal(1);
		})
	})

	describe ('enqueue', function() {
		it('should enqueue 1', function() {
			queue.enqueue(1);
			queue.peek().should.equal(1);
		})

		it('should throw an error for integers < 0', function() {
			(() => queue.enqueue(-1)).should.Throw(TypeError);
			(() => queue.enqueue(-59)).should.Throw(TypeError);
		})

		it('should throw an error for non-integers', function() {
			(() => queue.enqueue(-1.653)).should.Throw(TypeError);
			(() => queue.enqueue("lalala")).should.Throw(TypeError);
			(() => queue.enqueue([1,2,3])).should.Throw(TypeError);
			(() => queue.enqueue({number: 1})).should.Throw(TypeError);
		})
	})

	describe ('displayAll', function() {
		it('should display empty queue', function() {
			var result = queue.displayAll();
			result.should.equal("Empty queue!");
		})

		it('should display 1 2 3', function() {
			queue.enqueue(1);
			queue.enqueue(2);
			queue.enqueue(3);
			var result = queue.displayAll();
			result.should.equal("1 2 3");
		})
	})
	
});