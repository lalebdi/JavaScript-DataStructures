// is used to implment associative arrays or mappings of key-value pairs.
// they are common to implment a common map data structure or objects. 
// they are commonly used because they are efficient. The average time complexity is O(1) and the worst case is O(n). 
// it takes a key input and runs it in a hash function. 
//  a hash function maps strings to numbers. The numbers correspond to indexes of an array. It should map different strings to different numbers. 
// if two strings get hashed to the same number, a collision occures. One way of handling a collsions is by storing both values in the same number, then iterated through that number to get the value from the number. this could be slow. 
// Hash tables are built in JavaScript, which are used to implement objects. 

var hash = (string, max) =>{ // this is the hash function. max is the number of buckets we are using to store values.
    var hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);    // each string character has a numerical value and we're adding the character code to the hash. 
    }
    return hash % max; //this will result with the index that we're going to place the item in 
};

let HashTable = function(){
    let storage = []; //theis where we are going to store the data in
    const storageLimit = 4; // the number of buckets. 

    this.print = function(){
        console.log(storage)
    };

    this.add = function(key, value){
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) { //if the key exists we gonna set the new value. 
                    storage[index][i][1] = value;
                    inserted = true;
                }
                
            }
            if (inserted === false) {
                storage[index].push([key, value])
            }
        }
    };

    this.remove = function(key){
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else { //in case there are multiple items in that bucket. 
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
                
            }
        }
    };

    this.lookup = function(key){
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
                
            }
        }
    }

};

console.log(hash('Bella', 10)) // the 10 is the number of buckets. 
console.log(hash('Snowball', 10))

let ht = new HashTable();
ht.add('Leah', 'Woman');
ht.add('Bella', 'dog');
ht.add('Orca', 'Whale');
ht.add('Filpper', 'Dolphine') // if you change the storage limit number into a higher value you will get undefined(empty). and there won't be any colllisions. 
console.log(ht.lookup('Filpper')) 
ht.print();// interseting. Both Leah and Flipper went ot eh same bucket!!
