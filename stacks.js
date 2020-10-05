// they are last in first out

// functions: push, pop, peek and length

// you could use an array as a stack or creat a class.

var letters = [] // this is the stack

var word = "racecar";

var rWord = "";

// putting the letters of word into the stack

for (let i = 0; i < word.length; i++) {
    letters.push(word[i])
    
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
    rWord += letters.pop()
    
}

if (rWord === word) {
    console.log(word + " is a palindrome.")
}else{
    console.log(word + " is not a palindrome.")
}

// Creating a Stack:
var Stack = function(){
    this.count = 0 // keep track of how many items are in the stack
    this.storage = {} ;

    // Adding a value onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value
        this.count++;
    }

    
    
    // Remove and return the value at the end (or top) of the stack
    
    this.pop = function(){
        if (this.count === 0) {
            return undefined; // because there's nothing in the stack. once we return undefined the rest of the code won't run
        }
        
        this.count-- ;
        var result = this.storage[this.count]; //last item in the stack
        delete this.storage[this.count];
        return result; //the item we popped
    }
    
    this.size = function(){
        return this.count;
    }
    
    // Returns the value at the end of the stack
    this.peek = function(){
        return this.storage[this.count-1] //see the last item in the stack without removing it. -1 is becuae the count is for the item coming after. 
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek()); //we should see 2 here
console.log(myStack.pop()); //removed the 2
console.log(myStack.peek()); // should see 1
myStack.push("Bacon")
console.log(myStack.size())
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())