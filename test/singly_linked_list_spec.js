import chai from 'chai';
import LinkedList from '../src/SinglyLinkedList.js'

const should = chai.should();

describe ('Singly Linked List', function() {

	let linkedList = new LinkedList();

	beforeEach(function() {
		linkedList = new LinkedList();
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
	})

	describe('insertLast', function() {
		it('should return 4', function() {
			linkedList.insertLast(4);
			linkedList.insertLast(59);
			linkedList.insertLast(5);
			linkedList.peek().should.equal(4);
		})
	})
	
});