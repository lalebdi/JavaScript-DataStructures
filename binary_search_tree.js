// each node has a max of 2 child nodes
// the left child node is less than the parent node. The right child node is more than the parent node. 
// Because of the principle of a binary search on average operation is going to skip about half the tree. So, each, seach, add or deletion takes O(log(n)). 

// here I'm going to use classes to create a binary search tree. 

// Going to use classes to breact a binary tree.
// One for the node and the other is for the birnary search tree.

class Node {
    constructor(data, left = null, right = null ){
        this.data = data;
        this.left = left;
        this.right = right;
    };
};

class BST{
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;
        if(node === null){ //this is if this the first node
            this.root = new Node(data);
            return;
        } else { //this is if there are existing nodes and need to figure out where to place it
            const searchTree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null){
                        return searchTree(node.left); //this is the recursive nature comes in to find where to put the node 
                    }
                } else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    }else if(node.right !== null){
                    return searchTree(node.right)
                }
                } else {
                    return null; //if the data is === then we're gonna return null. 
                }
            } ;
            return searchTree(node);
        }
    }

    findMin(){  // the smallest data is always all the way to the left.
        let current = this.root;
        while (current.left !== null){
            current = current.left;
        }
        return current.data;
    }

    findMax(){  //the largest data is always all the way to the right.
        let current = this.root;
        while(current.right !== null){
            current == current.right;
        }
        return current.data;
    }

    find(data){
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            } 
        }
        return current;
    }

    isPresent(data){
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data< current.data) {
                current = current.left
            }else{
                current = current.right;
            }
        }
        return false;
    }

    remove(data){
        const removeNode = function(node, data){
            if (node == null) { //checking if the tree is empty
                return null;
            }
            if (data == node.data) {
                //  node has no children
                if (node.left == null && node.right == null) {
                    return null; //just delete it since it has no children to be placed. So the node is referenced to null. 
                }
                // node without a left child
                if (node.left == null) {
                    return node.right; //replace the node deleted with its right child. 
                }
                //  node without a right child
                if (node.right == null) {
                    return node.left; // replace the deleted node with its left child. 
                }
                // node with 2 children -> go to the right node and then go to the left most node
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data); //recursion
                return node;
                
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            }else  {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

}


const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(4));