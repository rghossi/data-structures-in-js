export default class Stack {
	constructor() {
		this.stack = [];
	}

	peek() {
		return this.stack[this.stack.length-1] || -1;
	}

	pop() {
		return -1;
	}

	push(integer) {
		this.stack.push(integer);
	}

	displayAll() {
		return this.stack.reverse().join(" ") || "Empty stack!";
	}

}