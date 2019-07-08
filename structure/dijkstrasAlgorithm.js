class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(name) {
		if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
		return this;
	}

	addEdge(firstV, secondV, weight) {
		if (!this.adjacencyList[firstV] || !this.adjacencyList[secondV])
			return undefined;

		this.adjacencyList[firstV].push({ node: secondV, weight });
		this.adjacencyList[secondV].push({ node: firstV, weight });
		return this;
	}

	dijkstrasAlgorithm(start, end) {

		// distances to vertex
		const distances = this.init(vertex => {
			return vertex === start
				? { [vertex]: 0 }
				: { [vertex]: Infinity };
		});

		// less distance - more priority
		const queue = new PriorityQueue();
		this.init(vertex => {
			return vertex === start
				? queue.enqueue(vertex, 0)
				: queue.enqueue(vertex, Infinity);
		});

		// prev vertex on the path
		const previous = this.init(vertex => {
			return { [vertex]: null };
		});

		const findValue = (arr, vertex) => {
			let result;

			arr.forEach(object => {
				if (Object.keys(object)[0] === vertex) result = object[vertex];
			});

			return result;
		};

		const setValue = (arr, vertex, newValue) => {
			arr.forEach((object, i) => {
				if (Object.keys(object)[0] === vertex) {
					arr[i][vertex] = newValue;
				}
			});
		};

		while (queue.nodes.length > 0) {
			const currVertex = queue.dequeue().val;
			if (currVertex === end) {
				const path = [];
				let currPathValue = currVertex;

				while (findValue(previous, currPathValue)) {
					path.push(currPathValue);
					currPathValue = findValue(previous, currPathValue);
				}

				return [path.concat(currPathValue).reverse(), findValue(distances, currVertex)];
			};

			this.adjacencyList[currVertex].forEach(neighbour => {
				const currDistance = findValue(distances, currVertex);
				const prevNeighbourDistance = findValue(distances, neighbour.node);
				const currNeighbourDistance = currDistance + neighbour.weight;

				if (currNeighbourDistance < prevNeighbourDistance) {
					setValue(distances, neighbour.node, currNeighbourDistance);
					setValue(previous, neighbour.node, currVertex);
					queue.enqueue(neighbour.node, currNeighbourDistance);
				}
			});
		};

	}

	init(cb) {
		return Object.keys(this.adjacencyList).map(cb);
	}
}

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.nodes = [];
	}

	enqueue(val, priority) {
		const newNode = new Node(val, priority);
		this.nodes.push(newNode);
		this.bubbleUp();

		return this;
	}

	bubbleUp() {
		let childIndex = this.nodes.length - 1;
		const childNode = this.nodes[childIndex];

		while (childIndex > 0) {
			let parentIndex = Math.floor((childIndex - 1) / 2);
			const parentNode = this.nodes[parentIndex];

			if (childNode.priority >= parentNode.priority) break;

			[this.nodes[childIndex], this.nodes[parentIndex]] = [parentNode, childNode];
			childIndex = parentIndex;
		};
	}

	dequeue() {
		// delete the greaters Node
		const deletedNode = this.nodes[0];
		const end = this.nodes.pop();

		if (this.nodes.length > 0) {
			this.nodes[0] = end;
			this.sinkDown();
		}

		return deletedNode;
	}

	sinkDown() {
		let idx = 0;
		const length = this.nodes.length;
		const currentNode = this.nodes[idx];

		while (true) {

			// left child of node in heap
			const leftIdx = idx * 2 + 1;
			// right respectively
			const rightIdx = idx * 2 + 2;

			// Node that we catch from the end of array(heap)
			const leftNode = this.nodes[leftIdx];
			const rightNode = this.nodes[rightIdx];

			// right and left child are greater than current Node
			if (
				leftIdx < length && rightIdx < length &&
				leftNode.priority < currentNode.priority &&
				rightNode.priority < currentNode.priority
			) {
				//console.log(isLeftGreater);
				leftNode.priority < rightNode.priority
					? idx = this.swap(idx, currentNode, leftIdx, leftNode)
					: idx = this.swap(idx, currentNode, rightIdx, rightNode);

				continue;
			}

			// just lift a left Node to root
			if (leftIdx < length && leftNode.priority < currentNode.priority) {
				idx =
					this.swap(idx, currentNode, leftIdx, leftNode);

				continue;
			}

			// just lift a right Node to root
			if (rightIdx < length && rightNode.priority < currentNode.priority) {
				idx =
					this.swap(idx, currentNode, rightIdx, rightNode);

				continue;
			}

			break;
		};
	}

	swap(firstIdx, firstNode, secondIdx, secondNode) {
		[
			this.nodes[firstIdx],
			this.nodes[secondIdx]
		] = [secondNode, firstNode];

		return secondIdx;
	}
}

const graph = new Graph();

graph
	.addVertex('Likbes')
	.addVertex('Kirito')
	.addVertex('Ugr')
	.addVertex('Egor')
	.addVertex('Vika')
	.addVertex('Lena')
	.addEdge('Likbes', 'Kirito', 10)
	.addEdge('Likbes', 'Ugr', 2)
	.addEdge('Kirito', 'Lena', 8)
	.addEdge('Lena', 'Egor', 2)
	.addEdge('Lena', 'Vika', 1)
	.addEdge('Ugr', 'Egor', 2)
	.addEdge('Vika', 'Egor', 8);

console.log(graph.dijkstrasAlgorithm('Kirito', 'Ugr'));

//							Likbes
// 				10	/   		 \ 2
// 				 Kirito			 Ugr
// 					8 |		2			| 2
// 					Lena - - - Egor	
// 					 1 \		  / 8
// 							 Vika
