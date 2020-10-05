// each node has a max of 2 child nodes
// the left child node is less than the parent node. The right child node is more than the parent node. 
// Because of the principle of a binary search on average operation is going to skip about half the tree. So, each, seach, add or deletion takes O(log(n)). 

// here I'm going to use classes to create a binary search tree. 

// Going to use classes to breact a binary tree.
// One for the node and the other is for the birnary search tree.
/* Binary Search Tree */

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left; //point to the left node
        this.right = right; //point to the right node
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) { //this is the case of the first node 
        this.root = new Node(data);
        return;
        } else { //this is if there are existing nodes and need to figure out where to place it
        const searchTree = function(node) {
            if (data < node.data) {
                if (node.left === null) { //no node on the left
                    node.left = new Node(data);
                    return;
                } else if (node.left !== null) {
                    return searchTree(node.left); //we gonna continue searching as a recurrsion.  this is the recursive nature comes in to find where to put the node 
                    }
            } else if (data > node.data) {
            if (node.right === null) {
                node.right = new Node(data);
                return;
            } else if (node.right !== null) {
                return searchTree(node.right);
                }
            } else {
            return null; // if the data are equal we're not going to add the data to the tree. ( No duplication  😡 )
            }
            };
            return searchTree(node); //this how we call the function
        }
    }
    findMin() { // the mini is all the way in the left
        let current = this.root;
            while (current.left !== null) {
        current = current.left;
        }
        return current.data;
    }
    findMax() { //the max is all they way to the right
        let current = this.root;
            while (current.right !== null) {
        current = current.right;
        }
            return current.data;
        }
    find(data) {
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
        isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
            return true;
            }
            if (data < current.data) {
            current = current.left;
            } else {
            current = current.right;
            }
        }
        return false;
        }
        remove(data) {
        const removeNode = function(node, data) {
            if (node == null) { //check if the tree is empty
            return null;
            }
            if (data == node.data) {
            // node has no children 
            if (node.left == null && node.right == null) { //just delete it since it has no children to be placed. So the node is referenced to null. 
                return null; //setting the refernce of the node to null. 
            }
            // node has no left child 
            if (node.left == null) {
                return node.right; //replace the node deleted with its right child. 
            }
            // node has no right child 
            if (node.right == null) {
                return node.left; // replace the deleted node with its left child. 
            }
            // node has two children . -> go to the right subnode then all the way to the most left sub node
            var tempNode = node.right;
            while (tempNode.left !== null) {
                tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data); //recurrsion
            return node;
            } else if (data < node.data) {
            node.left = removeNode(node.left, data); //recurrsion
            return node;
            } else {
            node.right = removeNode(node.right, data); //recurrsion
            return node;
            }
        }
        this.root = removeNode(this.root, data); //calling the function here. always pass the root node because you always start with the root node
        }
        isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }
    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    inOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();
            function traverseInOrder(node) {       
            node.left && traverseInOrder(node.left);
            result.push(node.data);
            node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        };
    }
    preOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();
            function traversePreOrder(node) {
            result.push(node.data);
            node.left && traversePreOrder(node.left);
            node.right && traversePreOrder(node.right);
            };
            traversePreOrder(this.root);
            return result;
        };
    }
    postOrder() {
        if (this.root == null) {
            return null;
        } else {
        var result = new Array();
        function traversePostOrder(node) {
            node.left && traversePostOrder(node.left);
            node.right && traversePostOrder(node.right);
            result.push(node.data);
        };
        traversePostOrder(this.root);
        return result;
        }
    }
    
    levelOrder() {
        let result = [];
        let Q = []; 
        if (this.root != null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                };
                if (node.right != null) {
                    Q.push(node.right);
                };
            };
            return result;
        } else {
            return null;
        };
    };
}


const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());