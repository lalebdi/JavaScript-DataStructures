# JavaScript-DataStructures
These are my notes for Data Structures implemented using JavaScript

#Big O Cheat Sheet:

-Big Os-


O(1) Constant- no loops
</br>
O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
</br>
O(n) Linear- for loops, while loops through n items
</br>
O(n log(n)) Log Liniear- usually sorting operations
</br>
O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops.
</br>
O(2^n) Exponential- recursive algorithms that solves a problem of size N
</br>
O(n!) Factorial- you are adding a loop for every element
</br>

Iterating through half a collection is still O(n) 
</br>
Two separate collections: O(a * b) -> e.g. nested for loops.
</br>
functions on the same indentation: O(a + b).
</br>

-What can cause time in a function?

Operations (+, -, *, /) Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())


-What causes Space complexity?

Variables
Data Structures
Function Call
Allocations
