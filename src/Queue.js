import { isValid } from './utils';

export default class Queue {
	constructor() {
		this.queue = [];
	}

	peek() {
		return this.queue[0] || -1;
	}

	dequeue() {
		return this.queue.shift() || -1;
	}

	//Should only accept integers >= 0
	enqueue(nonNegativeInteger) {
		if (isValid(nonNegativeInteger))
			this.queue.push(nonNegativeInteger);
	}

	displayAll() {
		return this.queue.join(" ") || "Empty queue!";
	}

}