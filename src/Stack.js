import { isValid } from './utils';

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
		if (isValid(nonNegativeInteger))
			this.stack.push(nonNegativeInteger);
	}

	displayAll() {
		return this.stack.reverse().join(" ") || "Empty stack!";
	}

}