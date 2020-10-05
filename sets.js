// is kinda like an array without any duplicates and no particular order.
// used for the presence of an item

function mySet(){
    // the var collection will hold the set
    var collection = []; //thisis an array which allows duplicated. However, we will implement it to not have duplicates.


    // the below method will check for the presence of an element and return truw or false
    this.has = function(element){
        return (collection.indexOf(element) !== -1); // if the element is not in the set its gonna return -1 -> true. else its false.
    };

    // the below method will return all the values in the set
    this.values = function(){
        return collection;
    };

    // the below method will add an element to the set
    this.add = function(element){
        if(!this.has(element)){ //first check if the element is in the set
            collection.push(element);
            return true;
        }
        return false;
    };

    // the below method will remove an element from a set
    this.remove = function(element){
        if(this.has(element)){ //first check if the element is in the collection
            index = collection.indexOf(element) //find the index of the element
            collection.splice(index,1); //remove the element at that index once
            return true;
        }
        return false;  //the lement is not in the collection
    };

    // the below method will return the size of the collection
    this.size = function(){
        return collection.length;
    }

    // ES6 has add, remove(delete), values, size(is not a method. It is a property. So, when you call it you dont need () after the method).
    // the below methods are not in ES6

    // the below method will return the union of 2 sets. Combine the sets while leaving the duplicates
    this.union = function(otherSet){
        var unionSet = new mySet()
        var firstSet = this.values(); // -> returns the collection. 
        var secondSet = otherSet.values();

        firstSet.forEach(function(e){
            unionSet.add(e);
        });

        secondSet.forEach(function(e){
                unionSet.add(e) // -> will not contain any duplicates.
            });        
        return unionSet;
    }

    // the below method will return the intersection of two sets as a new set. 
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet; // <- all the items that are in both sets. 
    };

    // the below method will return the difference of two sets as a new set
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    // the below mwthod will test if the set is a subset of a different set. True or False
    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value)
        })
    }
}


var setA = new mySet();
var setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values())
console.log(setB.difference(setA).values())



var setC = new Set();
var setD = new Set();

setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values()); // -> the ES6 will return an iterator. 
setD.delete("a")
console.log(setD.has("a"))
console.log(setD.add("d")) // will not return true or false. it will return the set itself. this is the ES^
