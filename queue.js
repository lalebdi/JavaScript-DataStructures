// is a way to hold data similar to the Stack. Its like a real life queue, first come first served. 
// can be implemented as an array. to limit it as a queue you must implment the methods yourself. 

function Queue(){
    collection = [];
    this.print = function(){
        console.log(collection);
    };

    this.enqueue = function(element){ //going to push the first item onto the queue.
        collection.push(element);
    };

    this.dequeue = function(){  // take an item off the queue.
        return collection.shift();
    };

    this.front = function(){ //this is going to return the item in the front of the array without removing it.
        return collection[0];
    };

    this.size = function(){
        return collection.length;
    };

    this.isEmpty = function(){ //check if no items in the queue
        return (collection.length === 0);
    };

};

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();


// other way to create a queue is a priority queue
// a priority queue passes the element into the queue and the priority of the element too. 
// if all the priorities are the same number, it will behave like a regular queue. 
// but when you pass in elements with different priorities, the elements with higher priority will be placed in the begning of the the queue. 

function PriorityQueue(){
    var collection = [];
    this.printCollection = function(){
        (console.log(collection));
    };

    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element)
        }else{
            var added = false;
            for (let i = 0; i<collection.length; i++){
                if(element[1] < collection[i][1]) //this is for checking priority
                collection.splice(i, 0, element);
                added = true;
                break;
            }
        }
        if(!added){
            collection.push(element);
        }
    }

    this.dequeue = function(){
        var value = collection.shift();
        return value[0];
    };

    this.front = function(){
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    };

    this.isEmpty = function(){
        return (collection.length === 0);
    };
};

var pq = new PriorityQueue();
pq.enqueue(['Snowball', 2]);
pq.enqueue(["Maryusa", 3]);
pq.enqueue(['Bella', 1]);
pq.enqueue(['Natasha', 2])
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();