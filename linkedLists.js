// here elements are stored in a node.
//  The node contains 2 keys of info:
//  1- the element itself.
// 2- reference to the next node. 

// Every linked List will have a head (the first node) and will have a size(the amount of nodes). the last node will point to null. 

function linkedList() {
    var length = 0;
    var head = null; // <- the list is empty here.
    
    var Node = function (element) {
        this.element = element; // <- the info
        this.next = null; // <- the link
    };
    
    this.size = function () {
        return length;
    };
    
    this.head = function () {
    return head;
    };

    this.add = function (element) {
        var node = new Node(element);
        if (head === null) { // if there are no nodes in the list yet. 
            head = node;
        } else {
            var currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            };

            currentNode.next = node; // <- will set it as the last node in the list 
        }
        length++;
    };

    this.remove = function (element) {
        var currentNode = head;
        var previousNode;

        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            };

            previousNode.next = currentNode.next;
        }
        length--;
    };

    this.isEmpty = function () {
        return length === 0; // will get a true or false 
    };

    this.indexOf = function (element) {
        var currentNode = head; // always start with the head.
        var index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1; // <- the element is not in the linked list 
    };

    this.elementAt = function (index) {
        var currentNode = head;
        var count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    };

    this.addAt = function (index, element) {
        var node = new Node(element);

        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if (index > length) {
            return false;
        }

        if (index === 0 ) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode; // <- because I wanna keep track of the current node. 
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    };

    this.removeAt = function (index) {
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if (index < 0 || index >= length) {
            return null;
        }
        if (index === 0) {
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex ++ ;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    }

};

var zoo = new linkedList();
zoo.add('Kitten');
zoo.add('Puppy');
zoo.add('Dog');
zoo.add('Cat');
zoo.add('Fish');
console.log(zoo.size());
console.log(zoo.removeAt(3));
console.log(zoo.elementAt(3))
console.log(zoo.indexOf('Puppy'))
console.log(zoo.size());