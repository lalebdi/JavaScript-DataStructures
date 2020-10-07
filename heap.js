// a binary heap is a partially ordered binary tree. 
// each node has at most 2 child nodes 
// the heap propertiy indicates a special relationship between the parent and the child. 
//  a Max heap -> all the parent nodes are equal or bigger than the child node. 
// Min heap -> the parent node is less than or equal the child node. 
// for both heaps the horizontal order doesn't matter. 
// All heaps are complete binary tress -> all levels of the tree are filled and if the level is partially filled it is filled from left to right. 
// heaps are often implmented as arrays. Notes that index[0] in the array will == null. The last index is the size of the heap. 

let MinHeap = function (params) {
    
    let heap = [null];

    this.insert = function (num) {
        heap.push(num);
        if (heap.length > 2) {
            let idx = heap.length -1;
            while (heap[idx] < heap[Math.floor(idx/2)]) {
                if (idx >= 1) {
                    [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]]; //destructured here. swapping the nodes
                    if (Math.floor(idx/2)) {
                        idx = Math.floor(idx/2)
                    } else {
                        break;
                    };
                };
            };
        };
    };

    this.remove = function () {

        let smallest = heap[1];

        if (heap.length >2) {
            heap[1] = heap[heap.length -1];
            heap.splice(heap.length - 1); // this shortens the array by 1. removes the last index
            if (heap.length == 3) {
                if (heap[1] > heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                };
                return smallest;
            };

            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (heap[i] >= heap[left] || heap[i] >= heap[right]) { // this will move the node to the right place. 
                if (heap[left] < heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * i;
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * i + 1;
                };
                left = 2 * i;
                right = 2 * i + 1;
                if (heap[left] === undefined || heap[right] === undefined) { // that means we're at the bottom of the tree
                    break;
                };
            };
        } else if (heap.length == 2) {
            heap.splice(1, 1);
        } else {
            return null;
        };
        return smallest;
    };

    this.sort = function(){
        let result = new Array();
        while (heap.length > 1) {
            result.push(this.remove());
        };
        return result;
    };

};