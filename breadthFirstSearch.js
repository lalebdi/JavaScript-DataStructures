/*
Graphs:
Breadth - first Search
*/

// how to find distances between two nodes in a graph (graph traversal):
// travsersal algorithm is used to visit nodes in a graph. The point is to determine how close are nodes to a root node.


// the below function will output a key-value pair, where the key is the node and the value is the distance from the root. 
function bfs(graph, root) { 
    var nodesLen = {}; // this will be used to store the ditsance from the root. 

    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity; // <- all the distances start infinity which indicated the node is not reachable. 
        
    }

    nodesLen[root] = 0; // <- the distance from the root node to the root node is set to 0. 

    var queue = [root]; // this queue is to keep a track of the nodes we visit 
    var current; // this will keep track of the node we're traversing. 

    while (queue.length !=0 ) {
        current = queue.shift(); // starts by popping a node to traverse. at the beginning its the root

        var curConnected = graph[current]; // we get all the nodes connected to the current node. 
        var neighborIdx = []; // will keep track of a list of nodes that are connected to the current node. 
        var idx = curConnected.indexOf(1); // this get the first node connected to the current node. 
        while (idx != -1) {
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx +1) // this line searches for the next connected node. look for the next one in the array starting at the previous one we found <-(the +1).
        }

        for (let j = 0; j < neighborIdx.length; j++) { // a loop through the connected nodes. 
            if (nodesLen[neighborIdx[j]] == Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                queue.push(neighborIdx[j]);
            }
            
        }
    }
    return nodesLen;
};


// below is an adjacency matrix graph. in an adjacency matrix, each nested array shows which nodes in the graph are connected to the node at that index. 
var exBFSGraph = [ 
    [0, 1, 1, 1, 0], // this array in index 0 shows which node that node 0 is connected to. if it is connected to a node it will show 1. If not connected it will show 0.   
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];

console.log(bfs(exBFSGraph, 1)); // we're trying to find how far away each node from node 1. 
/* 
Output: =>
object {
    0 : 2, <- It is 2 nodes away because of the direction of the graph. It goes to node 2 then node 0. 
    1: 0, <- the node itself is always 0 nodes away.
    2: 1,  
    3: 3, <- its 3 nodes away because it starts at 1 then 2 then 0 then 3. 
    4: Infinity <- because from the first node its impossible to get to the fourth node. becuase the single direction. 
}
*/