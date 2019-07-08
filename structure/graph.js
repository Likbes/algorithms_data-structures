class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
    return this;
  }

  addEdge(firstV, secondV) {
    if (!this.adjacencyList[firstV] || !this.adjacencyList[secondV])
      return undefined;

    this.adjacencyList[firstV].push(secondV);
    this.adjacencyList[secondV].push(firstV);
    return this;
  }

  removeEdge(firstVertex, secondVertex) {
    const firstVertexArr = this.adjacencyList[firstVertex];
    const secondVertexArr = this.adjacencyList[secondVertex];

    if (!firstVertexArr || !secondVertexArr)
      return undefined;

    this.adjacencyList[firstVertex] =
      firstVertexArr.filter(vertex => vertex !== secondVertex);

    this.adjacencyList[secondVertex] =
      secondVertexArr.filter(vertex => vertex !== firstVertex);

    return this;
  }

  removeVertex(name) {
    const vertexArr = this.adjacencyList[name];
    if (!vertexArr) return undefined;

    vertexArr.forEach(edge => {
      this.removeEdge(name, edge);
    });

    delete this.adjacencyList[name];
    return this;
  }

  DFSRecursively(start) {
    const result = [];
    const visitedVertex = [];

    const visitVertex = vertex => {
      const currVertexArr = this.adjacencyList[vertex];
      if (!currVertexArr.length) return null;

      result.push(vertex);
      visitedVertex.push(vertex);

      currVertexArr.forEach(neighbor => {
        if (!visitedVertex.includes(neighbor)) {
          visitVertex(neighbor);
        };
      });
    }

    visitVertex(start);
    return result;
  }

  DFSIteratively(start) {
    let stack = [start];
    let visitedVertex = [start];
    let result = [start];

    while (stack.length > 0) {
      const vertex = stack.pop();

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visitedVertex.includes(neighbor)) {
          visitedVertex.push(neighbor);
          result.push(neighbor);
          stack.push(neighbor);
        };
      });
    }

    return result;
  }

  BFS(start) {
    let queue = [start];
    let visitedVertex = [start];
    let result = [start];

    while (queue.length > 0) {
      const vertex = queue.shift();

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visitedVertex.includes(neighbor)) {
          visitedVertex.push(neighbor);
          result.push(neighbor);
          queue.push(neighbor);
        };
      });
    }

    return result;
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
  .addEdge('Likbes', 'Kirito')
  .addEdge('Likbes', 'Ugr')
  .addEdge('Kirito', 'Lena')
  .addEdge('Lena', 'Egor')
  .addVertex('Lena', 'Vika')
  .addEdge('Ugr', 'Egor')
  .addEdge('Vika', 'Egor')

console.log(graph.DFSRecursively('Likbes'));
console.log(graph.BFS('Likbes'))

//							Likbes
// 						/   		 \
// 				 Kirito			 Ugr
// 					 |					|
// 					Lena - - - Egor	
// 						 \		  /
// 							 Vika
