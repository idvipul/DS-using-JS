class Graph{
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
        // console.log(this.adjacencyList);
        console.log(vertex);
    }

    addEgde(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        console.log(this.adjacencyList);
    }
}

let graph = new Graph();
graph.addVertex("Dallas");
graph.addVertex("San Francisco");
graph.addVertex("Los Angeles");
graph.addEgde("San Francisco", "Los Angeles");