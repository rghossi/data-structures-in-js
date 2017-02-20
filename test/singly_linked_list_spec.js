import chai from 'chai';
import SinglyLinkedList from '../src/SinglyLinkedList.js'

const should = chai.should();

describe ('Singly Linked List', function() {

	let linkedList = new SinglyLinkedList();

	beforeEach(function() {
		linkedList = new SinglyLinkedList();
	})
	
	describe('peek', function() {
		it('should return -1 for empty list', function() {
			linkedList.peek().should.equal(-1);
		})

		it('should return 10', function() {
			linkedList.insertFirst(5);
			linkedList.insertFirst(10)
			linkedList.peek().should.equal(10);
		})
	})

	describe('insertFirst', function() {
		it('should return 5', function() {
			linkedList.insertFirst(10);
			linkedList.insertFirst(59);
			linkedList.insertFirst(5);
			linkedList.peek().should.equal(5);
		})

		it('should throw an error for integers < 0', function() {
			(() => linkedList.insertFirst(-1)).should.Throw(TypeError);
			(() => linkedList.insertFirst(-59)).should.Throw(TypeError);
		})

		it('should throw an error for non-integers', function() {
			(() => linkedList.insertFirst(-1.653)).should.Throw(TypeError);
			(() => linkedList.insertFirst("lalala")).should.Throw(TypeError);
			(() => linkedList.insertFirst([1,2,3])).should.Throw(TypeError);
			(() => linkedList.insertFirst({number: 1})).should.Throw(TypeError);
		})

	})

	describe('insertLast', function() {
		it('should return 4', function() {
			linkedList.insertLast(4);
			linkedList.insertLast(59);
			linkedList.insertLast(5);
			linkedList.peek().should.equal(4);
		})

		it('should throw an error for integers < 0', function() {
			(() => linkedList.insertLast(-1)).should.Throw(TypeError);
			(() => linkedList.insertLast(-59)).should.Throw(TypeError);
		})

		it('should throw an error for non-integers', function() {
			(() => linkedList.insertLast(-1.653)).should.Throw(TypeError);
			(() => linkedList.insertLast("lalala")).should.Throw(TypeError);
			(() => linkedList.insertLast([1,2,3])).should.Throw(TypeError);
			(() => linkedList.insertLast({number: 1})).should.Throw(TypeError);
		})
	})

	describe('displayAll', function() {
		it('should display empty list', function() {
			var result = linkedList.displayAll();
			result.should.equal("Empty list!");
		})

		it('should return 1 -> 2 -> 3 -> 4 -> 5', function() {
			for (let i=1;i<=5;i++)
				linkedList.insertLast(i);
			linkedList.displayAll().should.equal('1 -> 2 -> 3 -> 4 -> 5');
		})

		it('should return 5 -> 4 -> 3 -> 2 -> 1', function() {
			for (let i=1;i<=5;i++)
				linkedList.insertFirst(i);
			linkedList.displayAll().should.equal('5 -> 4 -> 3 -> 2 -> 1');
		})
	})
	

	describe('toArray', function() {
		it('should return [] for empty list', function() {
			const arr = linkedList.toArray();
			Array.isArray(arr).should.be.true;
			arr.should.eql([]);
		})
		it('should return [1, 2, 3, 4, 5]', function() {
			for (let i=1;i<=5;i++)
				linkedList.insertLast(i);
			const arr = linkedList.toArray();
			Array.isArray(arr).should.be.true;
			arr.should.eql([1, 2, 3, 4, 5]);
		})

		it('should return [5, 4, 3, 2, 1]', function() {
			for (let i=1;i<=5;i++)
				linkedList.insertFirst(i);
			const arr = linkedList.toArray();
			Array.isArray(arr).should.be.true;
			arr.should.eql([5, 4, 3, 2, 1]);
		})
	})

	describe('insertAfter', function() {
		it('should insert 4 after node with value 1', function() {
			linkedList.insertLast(1);
			linkedList.insertLast(2);
			linkedList.insertLast(3);
			linkedList.toArray().should.eql([1, 2, 3]);
			linkedList.insertAfter(1, 4);
			linkedList.toArray().should.eql([1, 4, 2, 3]);
		})

		it('should insert 4 after node with value 3', function() {
			linkedList.insertLast(1);
			linkedList.insertLast(2);
			linkedList.insertLast(3);
			linkedList.toArray().should.eql([1, 2, 3]);
			linkedList.insertAfter(3, 4);
			linkedList.toArray().should.eql([1, 2, 3, 4]);
		})

		it('should return -1 when given node is not found', function() {
			linkedList.insertAfter(2, 1).should.equal(-1);
			linkedList.insertAfter(0, 1).should.equal(-1);
			linkedList.insertAfter(1, 1).should.equal(-1);
		})

		it('should throw an error for integers < 0', function() {
			(() => linkedList.insertAfter(0, -1)).should.Throw(TypeError);
			(() => linkedList.insertAfter(-59, 0)).should.Throw(TypeError);
		})

		it('should throw an error for non-integers', function() {
			(() => linkedList.insertAfter(0, -1.653)).should.Throw(TypeError);
			(() => linkedList.insertAfter("lalala", 0)).should.Throw(TypeError);
			(() => linkedList.insertAfter(0, [1,2,3])).should.Throw(TypeError);
			(() => linkedList.insertAfter(0, {number: 1})).should.Throw(TypeError);
		})
	})
});