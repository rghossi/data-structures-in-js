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
		const newNode = new Node(nonNegativeInt);
		if (this.peek() === -1) this.head = newNode;
		else {
			newNode.next = this.head;
			this.head = newNode;
		}
	}

	insertLast(nonNegativeInt) {
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

}