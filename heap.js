// a binary heap is a partially ordered binary tree. 
// each node has at most 2 child nodes 
// the heap propertiy indicates a special relationship between the parent and the child. 
//  a Max heap -> all the parent nodes are equal or bigger than the child node. 
// Min heap -> the parent node is less than or equal the child node. 
// for both heaps the horizontal order doesn't matter. 
// All heaps are complete binary tress -> all levels of the tree are filled and if the level is partially filled it is filled from left to right. 
// heaps are often implmented as arrays. Notes that index[0] in the array will == null. The last index is the size of the heap. 