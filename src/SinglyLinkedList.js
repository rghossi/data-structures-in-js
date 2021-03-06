import { isValid } from './utils';

class Node {
	constructor(num) {
		this.data = num;
		this.next = null;
	}
}

export default class SinglyLinkedList {
	constructor() {
		this.head = new Node(-1);
	}

	peek() {
		return this.head.data;
	}

	insertFirst(nonNegativeInt) {
		if (!isValid(nonNegativeInt)) return;
		const newNode = new Node(nonNegativeInt);
		if (this.peek() === -1) this.head = newNode;
		else {
			newNode.next = this.head;
			this.head = newNode;
		}
	}

	deleteFirst() {
		if (this.peek() === -1) return -1;
		const deletedNode = this.head.data;
		this.head = this.head.next || new Node(-1);
		return deletedNode;
	}

	insertLast(nonNegativeInt) {
		if (!isValid(nonNegativeInt)) return;
		const newNode = new Node(nonNegativeInt);
		if (this.peek() === -1) this.head = newNode;
		else {
			let n = this.head;
			while (n.next !== null){
				n = n.next;
			}
			n.next = newNode;
		}
	}

	deleteLast() {
		if (this.peek() === -1) return -1;
		let n = this.head;
		let deletedNode = n.data;
		if (n.next === null) {
			n.data = -1;
			return deletedNode;
		}
		
		while(n.next !== null) {
			if (n.next.next === null) {
				deletedNode = n.next.data;
				n.next = null;
				break;
			}
			n = n.next;
		}
		return deletedNode;
	}

	insertAfter(existentNodeValue, element) {
		if (!isValid(existentNodeValue)) return;
		if (!isValid(element)) return;
		const newNode = new Node(element);
		let temp = this.head;
		while (temp.data !== existentNodeValue) {
			temp = temp.next;
			if (!temp) return -1;
		}
		newNode.next = temp.next;
		temp.next = newNode;
	}

	deleteNode(nodeValueToBeDeleted) {
		if (!isValid(nodeValueToBeDeleted)) return;
		if (this.head.next === null && this.head.data !== nodeValueToBeDeleted)
			return -1;
		let deletedNode;
		let temp = this.head;
		while (temp.next.data !== nodeValueToBeDeleted) {
			temp = temp.next;
			if (!temp) return -1;
		}
		deletedNode = temp.next.data;
		temp.next = temp.next.next;
		return deletedNode;
	}

	displayAll() {
		if (this.head.data === -1) return 'Empty list!';
		let result = '';
		let n = this.head;
		while (n.next !== null) {
			result += n.data + " -> ";
			n = n.next;
		}
		result += n.data;
		return result;
	}

	toArray() {
		if (this.head.data === -1) return [];
		let arr = [];
		let n = this.head;
		while (n) {
			arr.push(n.data);
			n = n.next;
		}
		return arr;
	}
}