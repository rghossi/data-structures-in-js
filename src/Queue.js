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
		if (typeof nonNegativeInteger != 'number') throw new TypeError("Wrong variable type. Expected (non negative) integer.");
		if (nonNegativeInteger < 0) throw new TypeError("Negative integers are not accepted!");
		this.queue.push(nonNegativeInteger);
	}

	displayAll() {
		return this.queue.join(" ") || "Empty queue!";
	}

}