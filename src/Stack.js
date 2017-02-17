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

	push(positiveInteger) {
		if (typeof positiveInteger != 'number') throw new TypeError("Wrong variable type. Expected (non negative) integer.");
		if (positiveInteger < 0) throw new TypeError("Negative integers are not accepted!");
		this.stack.push(positiveInteger);
	}

	displayAll() {
		return this.stack.reverse().join(" ") || "Empty stack!";
	}

}