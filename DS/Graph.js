class Graph{
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
        console.log(vertex);
        console.log('---');
    }

    addEgde(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        console.log(this.adjacencyList);
        console.log('---');
    }

    removeEgde(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
        console.log(this.adjacencyList);
        console.log('---');
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            let adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEgde(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];

        console.log(this.adjacencyList);
        console.log('---');
    }
}

let graph = new Graph();
graph.addVertex("Dallas");
graph.addVertex("San Francisco");
graph.addVertex("Los Angeles");
graph.addVertex("San Jose");
graph.addVertex("Santa Clara");
graph.addEgde("San Francisco", "Los Angeles");
graph.addEgde("Dallas", "Los Angeles");
graph.addEgde("Santa Clara", "Los Angeles");
graph.addEgde("San Jose", "Los Angeles");
graph.addEgde("Santa Clara", "San Francisco");
graph.addEgde("Santa Clara", "San Jose");
graph.removeEgde("Dallas", "Los Angeles");
graph.removeVertex("Santa Clara");