export default class Stack {
	constructor() {
		this.stack = [];
	}

	peek() {
		return this.stack[this.stack.length-1] || -1;
	}

	pop() {
		return this.stack.pop() || -1;
	}

	//Should only accept integers >= 0
	push(nonNegativeInteger) {
		if (typeof nonNegativeInteger != 'number') throw new TypeError("Wrong variable type. Expected (non negative) integer.");
		if (nonNegativeInteger < 0) throw new TypeError("Negative integers are not accepted!");
		this.stack.push(nonNegativeInteger);
	}

	displayAll() {
		return this.stack.reverse().join(" ") || "Empty stack!";
	}

}