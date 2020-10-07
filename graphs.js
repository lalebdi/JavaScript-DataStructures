// The data in graphs are called nodes (or vertices). The connections between the nodes are called edges. 
//  a good example of graphs is the conatct tracing. how one person is connected to diferent people. 
// they are of 2 types: directed and undirected.
// Undirected are graphes without any directions on the edges between the nodes. -> like social networks.
// The directed have directions in the edges. -> Web page links. 

// to represent a graph: 3ways:
// 1- Adjacency list:
// associates each vertix of the graph with the collection of its neighboring vertices or edges. 
var undirectedG = {
    NodeA: ['NodeB'],
    NodeB: ['NodeA', 'NodeC'],
    NodeC: ['NodeB']
};

// its undirected because it is not showing the direction of the edges. 

// or 

// var undirectedGArr = {
//     [1], // Node A
//     [0, 2], // Node B
//     [1] // Node C
// };

// 2- Adjacency Matrix:
// a 2 dimetional array where each nested array has the same number of elements as the outer array. Basically, a matrix of numbers where the numbers represent the edges.
// 0 => no edge or realtionship. 1 => there's a relationship. 
var adjMat = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]

// each row has have the same elements as the nodes.
// Adjacency Matrix can be used to repesent a directed graph.
var adjMatD = [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0]
];

// Above ^ the second node has an edge that  is pointing to the first node. and the third node has an edge pointing to the second node. 

// 3- Incidence Matrix:
// is a 2 dimentional array. uses  rows to represent nodes and columns to represent edges. So, we can have an uneven number of rows and columns. Each column will represent a unique edge and each edge connects to a node
//  to show that theres an egde between two nodes, put a 1 in the two rows of the particular column. 
// for a direct graph use a 1 to an edege leaving a particular node. -1 for an edge entering a node.
var incMatDir = [
    [1, 0, -1, 1],
    [-1, 1, 0, 0],
    [0, -1, 1, 0],
    [0, 0, 0, -1]
] ;

// graphes can have weights on their edges. 
// a different weight can be represented a a number greater than 1. 
