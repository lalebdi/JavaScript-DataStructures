/*
Graphs:
Breadth - first Search
*/

// how to find distances between two nodes in a graph (graph traversal):
// travsersal algorithm is used to visit nodes in a graph. The point is to determine how close are nodes to a root node.

function bfs(graph, root) {
    var nodesLen = {};

    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
        
    }

    nodesLen[root] = 0;

    var queue = [root];
    var current;

    while (queue.length !=0 ) {
        current = queue.shift();

        var curConnected = graph[current];
        var neighborIdx = [];
        var idx = curConnected.indexOf(1);
        while (idx != -1) {
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx +1)
        }

        for (let j = 0; j < neighborIdx.length; j++) {
            if (nodesLen[neighborIdx[j]] == Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                queue.push(neighborIdx[j]);
            }
            
        }
    }
    return nodesLen;
};

var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];

console.log(bfs(exBFSGraph, 1));