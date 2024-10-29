JavaScript old versions  to current version: ECMA(Stands for European Computer Manufacturers Association).
1. ECMAScript 1 (ES1) - 1997
    The first edition of ECMAScript, the standard upon which JavaScript is based.
    Introduced basic features like variables, operators, functions, and control flow.

2. ECMAScript 2 (ES2) - 1998
    Minor revisions and corrections to ES1.
    No major new features were added.

3. ECMAScript 3 (ES3) - 1999
    Introduced regular expressions, try...catch for exception handling, for...in loop, and better string handling.
    Added features like Array.prototype.forEach, String.prototype.trim, and Date.prototype.toISOString.

4. ECMAScript 4 (ES4) - **
    Originally planned but eventually abandoned. It aimed to introduce many new features like classes, modules, and type annotations.

5. ECMAScript 5 (ES5) - 2009
    Major update with new features including:
    Strict mode for better error handling.
    Array.prototype.forEach, Array.prototype.map, Array.prototype.filter.
    JSON support via JSON.parse and JSON.stringify.
    Object.create, Object.defineProperty, and Object.defineProperties.
    Function.prototype.bind.

6. ECMAScript 2015 (ES6) - 2015
    A significant update with many new features:                
    Let and Const: Block-scoped variables.
    Arrow Functions: Shorter syntax for functions.
    Classes: Syntax for creating classes.
    Template Literals: Enhanced string literals.
    Destructuring Assignment: Extract values from arrays and objects.
    Promises: Simplified asynchronous operations.
    Modules: import and export statements.
    Enhanced Object Literals: Simplified object creation.
    Default Parameters, Rest Parameters, Spread Operator

7. ECMAScript 2016 (ES7) - 2016
    Array.prototype.includes: Check if an array includes a certain value.
    Exponentiation Operator: ** for exponentiation (e.g., 2 ** 3).

8. ECMAScript 2017 (ES8) - 2017
    Async/Await: Simplified asynchronous code.
    Object.entries() and Object.values(): Retrieve entries and values of an object.
    String padding: String.prototype.padStart and String.prototype.padEnd.
    Shared Memory and Atomics: Low-level concurrency primitives.

9. ECMAScript 2018 (ES9) - 2018
    Asynchronous Iteration: for await...of loop.
    Rest/Spread Properties: Spread and rest properties for objects.
    Regular Expression Enhancements: Lookbehind assertions, named capture groups, and more.

10. ECMAScript 2019 (ES10) - 2019
    Array.prototype.flat and Array.prototype.flatMap: Flatten arrays.
    Object.fromEntries: Convert an array of key-value pairs into an object.
    String.prototype.trimStart and String.prototype.trimEnd: Trim whitespace from the start and end of a string.

11. ECMAScript 2020 (ES11) - 2020
    BigInt: For arbitrarily large integers.
    Nullish Coalescing Operator (??): Handle null or undefined values.
    Optional Chaining (?.): Access deeply nested properties safely.
    Promise.allSettled: Handle all promises in a batch.

12. ECMAScript 2021 (ES12) - 2021
    Logical Assignment Operators: &&=, ||=, and ??=.
    String.prototype.replaceAll: Replace all occurrences of a substring.
    WeakRef: Weak references to objects.

13. ECMAScript 2022 (ES13) - 2022
    Class Fields: Public and private fields in classes.
    Top-Level Await: Use await at the top level of modules.
    WeakRef: Weak references to objects.

14. ECMAScript 2023 (ES14) - 2023
    Array.prototype.findLast and Array.prototype.findLastIndex: Methods for finding elements from the end of an array.
    Change Array by Copy: Methods for creating new arrays (e.g., toReversed, toSorted).
    Hashbang Grammar: Support for hashbang (#!) at the beginning of a script.


1.What is JavaScript:
    JavaScript is the world's most popular programming language.
    JavaScript is the programming language of the Web. JavaScript is easy to learn.

2.JavaScript Variables:
    Variables are containers for storing Information or Data
        1. Using var 
        2. Using let
        3. Using const

    The var keyword was used in all JavaScript code from 1995 to 2015.
    The let and const keywords were added to JavaScript in 2015.
    The var keyword should only be used in code written for older browsers.
    
    Example:
        var a = 10;
        var b = 20;
        console.log(a + b);
        In the above program a and b are variables, 10 and 20 are Integer Data. 

        var a = 50;
        console.log(a);
        O/p: 50

        let a = 50;
        console.log(a);
        O/p: 50

        const a = 50;
        console.log(a);
        O/p: 50

        Using let is a Block Scope 
        {
            let a = 10;
        }
        console.log(a);
        O/p: ReferenceError: a is not defined

        {
            let a = 10;
            console.log(a);
        }
        O/p:10;

        Using var is a Global Scope
            {
                var a =20;
                console.log(a);
            }
            var b =30;
            var c = a+b;
            console.log(c);
            o/p: 20, 50

        Using const, Always declare a variable with const when you know that the value should not be changed.    

        const a = 10;
        a = 20;
        console.log(a);
        O/p: TypeError: Assignment to constant variable.


        ex:
        var Price = 100;
        var Product = 'Book';
        var Tax = 10;
        console.log(Product);
        var total = Price + Tax;
        console.log(total); // O/p: Book, 110

    3.JavaScript Keywords:
        JavaScript statements often start with a keyword to identify the JavaScript action to be performed.
        Our Reserved Words Reference lists all JavaScript keywords.
        Here is a list of some of the keywords you will learn about in this tutorial:

        var - Declares a variable
        let	- Declares a block variable
        const - Declares a block constant
        if - Marks a block of statements to be executed on a condition
        switch - Marks a block of statements to be executed in different cases
        for - Marks a block of statements to be executed in a loop
        function - Declares a function
        return - Exits a function
        try - Implements error handling to a block of statements


    4.JavaScript Comments:
        JavaScript comments can be used to explain JavaScript cide, and to make it more Readavle.
        JavaScript comments can also be used to Prevent execution, when testing Alternative code
        Types: 
            Single line comments
            Multi line comments
        ex:
        Single line comments
           // ooty apple
           var fruit = 'Apple';
           console.log(fruit);

        Multi line comments
            /* var Price = 100;
            var Product = 'Book';
            var Tax = 10;
            console.log(Product);
            var total = Price * Tax;
            console.log(total); */

    5.JavaScript Operators:
        Javascript operators are used to perform different types of mathematical and logical computations.

        Examples:
        The Assignment Operator = assigns values
        The Addition Operator + adds values
        The Multiplication Operator * multiplies values
        The Comparison Operator > compares values

        ex: +, -, *, /, 

        Increment Operator:
        The increment operator(++) is an arithmetic operator in JavaScript that is used to increment the value of a variable by 1, 
        It can be used in two different ways

        PostIncrement:
        var a = 10;
        a++
        console.log(a); // O/p : 11

        PostDecrement:
        var a = 10;
        a--
        console.log(a); // O/p : 9
        
        PreIncrement
        var a = 10;
        var b = ++a; // Preincrement
        console.log(b); // O/p : 11

        PreDecrement
        var a = 10;
        var b = --a; // PreDecrement
        console.log(b); // O/p : 11

    6.JavaScript Datatype:
        Data types in JavaScript define the data type that a variable can store. JavaScript includes primitive and non-primitive data types.

        ex:
        var a = 10;
        var b = 'Apple'
        console.log(typeof(a)); // O/p: Number
        console.log(typeof(b)); // O/p: String

    Primitive Datatype:
        1.Number
            Represents numeric values, both integers and floating-point numbers.
            ex:
            var a = 10;
            console.log(typeof(a)); // O/p: Number

        2.String
            Represents a sequence of characters enclosed in single, double.
            ex:
            var b = 'Apple'
            console.log(typeof(b)); // O/p: String

        3.Boolean
            Represents logical values, either true or false.
            ex:
            console.log(typeof(true)); // O/p: Boolean

        4.Null
            Represents the intentional absence of any object value. It's a primitive type, but typeof null returns "object" due to a quirk in JavaScript.
            ex:
            var z =null
            console.log(z); // O/p: null
            console.log(typeof(z)); // O/p: object

        5.Undefined
            Represents a variable that has been declared but has not been assigned a value yet.
            ex:
            var a;
            console.log(a); // O/p: Undefined
            console.log(a); // O/p: Undefined
       
    Non primitive Datatype:
        1.Object
            Represents a collection of key-value pairs. Objects can also include functions, which are referred to as methods.
            ex:
            var obj = {name: 'John', age: 30};
            console.log(typeof(obj)); // O/p: object

        2.Array
            Represents a list of items, where each item can be of any type. Arrays are special kinds of objects.
            ex:
            var arr = [1, 2, 3, 4];
            console.log(typeof(arr)); // O/p: object

    7.JavaScript Functions:
        A JavaScript function is a block of code designed to perform a particular task.
           Syntax:
           function <function name>(){}

           function hi()
           {
            console.log("Hey there");
           }   
           hi(); // 0/p : Hey there

           ex:
            var a =10;
            var b =20;
            function add()
            {
                console.log(a+b);
            }
            add(); // O/p: 30
            
            function add(a,b)
            {
                console.log(a+b);
            }
            add(); // O/p: NaN
            add(10,20); // O/p: 30 // parameters passed to the function

    8.JavaScript Objects:
        In real life, objects are things like: houses, cars, people, animals, or any other subjects.
        Person: 
            Properties (Attributes):

            Name: John
            Age: 28                         
            Gender: Male
            Height: 180 cm
            Weight: 75 kg

            Behaviors (Methods):

            Eat: Consume food
            Sleep: Rest
            Walk: Move on foot
            Talk: Communicate verbally
    
        ex:
        var person = {
            name: 'John',
            age: 28,
            gender: 'Male',
            height: 180,
            weight: 75,
        }
        function eat() {
            console.log(person.name + ' is eating');
        }

        function sleep() {
            console.log(person.name + ' is sleeping');
        }

        function walk() {
            console.log(person.name + ' is walking');
        }

        function talk() {
            console.log(person.name + ' is talking');
        }
        
        eat(); // O/p: John is eating
        sleep(); // O/p: John is sleeping
        walk(); // O/p: John is walking
        talk(); // O/p: John is talking

    Object Methods
        A method is a function definition stored as a property value.   

        ex:
        var person = {
            firstName: "John",
            lastName: "Doe",
            id: 5566,
            fullName: function() {
                console.log(this.firstName + " " + this.lastName);
            }
        };
        person.fullName(); // O/p: John Doe

    Object Display
        Displaying a JavaScript object will output [object Object]:    
        <p id="demos"></p>
        ex:
        const person = {
            name: "John",
            age: 30,
            city: "New York"
        };
        document.getElementById("demos").innerHTML = person;
        O/p: [object Object]
        console.log(person); // O/p: {name: "John", age: 30, city: "New York"}

    9.String methods Upper and Lower Case
        A string is converted to upper case with toUpperCase():
        ex:
        let text1 = "Hello World!";
        let text2 = text1.toUpperCase(); 
        console.log(text2);
        O/p: HELLO WORLD!

        A string is converted to lower case with toLowerCase():
        ex:
        let text1 = "Hello World!";
        let text2 = text1.toLowerCase(); 
        console.log(text2);
        O/p: hello world!

    concat() joins two or more strings:

    Axios used:
    Axios is popular JavaScript library user for making HTTP requests from a web browser or Node.js.
    It simplifies the process of sending asynchronous requests HTTP requests to a server and also handles the response.

    Methods:
    pop(): 
        Remove (pop) the last element:
        ex:
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.pop();
        document.getElementById("demo").innerHTML = fruits;
        O/p: Banana,Orange,Apple

        pop() returns the element it removed:
        ex:
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let removed = fruits.pop();
        document.getElementById("demo").innerHTML = removed;
        O/p: Mango

    push();
        Add a new iteam to an array
        ex: 
        const fruits = ["Banana", "Orange", "Apple"];
        fruits.push("Mango");
        document.getElementById("demo").innerHTML = fruits;
        O/p: Banana,Orange,Apple,Mango

    reverse();
        All array elements to reverse.
        ex:
        const fruits = ["Banana", "Orange", "Apple"];
        fruits.reverse();
        document.getElementById("demo").innerHTML = fruits;
        O/p:Apple,Orange,Banana

    splice();
        Adds and remove array elements
        ex:
        const fruits = ["Banana", "Orange", "Apple"];
        fruits.splice(1,0, 'Mango');
        document.getElementById("demo").innerHTML = fruits;
        O/p: Banana,Mango,Orange,Apple
        
    length;
        The length property sets or returns the number of elements in an array.
        ex:
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.length = 2;
        document.getElementById("demo").innerHTML = fruits;
        O/p: Banana,Orange
     
     

// Array methods:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin


