// a prefix tree used to store associative data structures.
// A trie stores data in steps. Each step is anode in the trie.
// think of auto-correct, where the letters are stored in nodes and a chain of nodes will make up a word. 

let Node = function () {
    this.keys = new Map(); // <- this is the ES6 Map structure. Kinda like an object( has key-value pairs). In the keys, the key-value pairs are like the name of a folder and a folder in a directory strcuture. 
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
};

let Trie = function () {
    
    this.root = new Node();

    this.add = function (input, node = this.root) { // its a recurrsive function. 
        if (input.length === 0) { // if we're at the end of the node we're passed in. 
            node.setEnd();
            return;

        } else if(!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]))
        };
    };

    this.isWord = function (word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false;
            } else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            };
        };
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    };

    this.print = function () {
        let words = new Array();
        let search = function (node = this.root, string) {
            if (node.keys.size != 0 ) {
                for ( let letter of node.keys.keys()){
                    search(node.keys.get(letter), string.concat(letter));
                };
                if (node.isEnd()) {
                    words.push(string);
                };
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            };
            };
            search(this.root, new String());
            return words.length > 0 ? words : null;
    }
    
};

myTrie = new Trie();
myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dork');
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense');

console.log(myTrie.isWord('doll'));
console.log(myTrie.isWord('dor'));
console.log(myTrie.isWord('dorf'));
console.log(myTrie.print());