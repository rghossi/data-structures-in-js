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