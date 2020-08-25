// OBJECT-> A javaScript is an entity which have properties and behaviour.

/* In this section we will learn about :-
1) Creating objects 
2) Factories and constructors 
3) Primitive and Reference types
4) working with property 
5) private properties 
6) getter/setters*/

// creating objects using object literals 
/* In this we are defining a constant object circle which have
   radius and location as its property and the draw as its method.
   note- Any property which are functions are called method.
*/

const CIRCLE={
    radius:1,
    location:{
        x:1,
        y:1
    },
    draw: function(){
      console.log("draw");
    }
};
// We can access its properties or methods by using dot notation
CIRCLE.draw()

// If the object has more than one method than it is not recommmended to create object using literals cause it will cause a bug.


//FACTORIES- factories are function which returns object without using new keyword. It is not a constructor or a class.

/* We use factories and constructor to create object having multiple methods.
   Here we are using factory function for creating the object.
   In this we are defining a function createCircle that takes radius as a parameter and simply returns and object with the radius and the draw function.
   NOTE- In ES6 if the key value are same as the parameter then we can cut the noise by just using the parameter in this case it is radius.
   After defining the function we can make many as many object as we want and access the methods using the dot notation.
*/
function createCircle(radius){
    return{
        radius,
        draw: function(){
          console.log("draw");
        }
    }
}
const circle= createCircle(1);
circle.draw();

// CONSTRUCTOR-> It is a function that initializes an object. It uses new and this keyword.

/* constructor is also function which returns object it is different cause it uses this and new keyword.
   Here we will define the Circle constructor function which will take radius as its parameter and then with the use of this keyword we will initialize its properties and 
   then we will create an another object which will be a circle.
*/
function Circle(radius){
    this.radius=radius;
    this.draw= function(){
        console.log('draw');
    }
}
const another = new Circle(1);//here after writing the code we are creating and empty object and then the constructor function is initialising it with the properties.

//Constructor property-> every object has a constructor property and it refers to the fuction i.e. used to create that object.
/* For example 
   if we write another.constructor in console then output on console will be
   
   ƒ Circle(radius){
    this.radius=radius;
    this.draw= function(){
        console.log('draw');
    }
}
// here f sign represents that it is a function.

//if we write circle.constructor we will get the output 
 f Object() {[native code]}

 // this output shows that this is a javaScript builtIn constructor function.
    for example:-

    let x={};
  
    //javascript will interpret it like this 
       let x= new Object();

    //In javaScript we have more constructor functions such as 
       new String(); //but we use string literals i.e. "",'' cause they are easy to use 
       new Bolean(); //we use true, false 
       new Number(); //we use 1,2,3

 */

 // Function are objects in javaScript which are created by using the Function() constructor. We can create new objects from the function in js.
 const car = new Function('radius',`
    this.radius=radius;
    this.draw= function(){
        console.log('draw');
    }
 `);
 const bmw = new car(1);

 //Above code will create a bmw object.😂😂

 
 Circle.call({},1)// this code is same as the code below this line this will create an call the constructor and pass the 1 as a prameter to the constructor.

 const cool = new Circle(1);

//Primitives are copied by their value.But the Objects are copied by their reference.
// Note:- remember that functions and arrays are also object.

// Adding or deleting properties

/* In javaScript we can delete or add property on the fly javascript objects are very dynamic unlike the objects in the other languages
   that makes it very powerful.

   for example if we are making an app and user needs an token on the fly to communicate from the server we can do it easily by just using dot notation or bracket notation.

 */

 // for enumerating all the members in an object we can use for in loop.
  for(let key in circle){
      if(typeof circle[key]!=='function')
      console.log(key, circle[key]);
      // in this code all the properties of the circle will be listed below which are not methods.

  }
  // we can also use Object.keys() method and pass the object as a parameter to get all the key as an array.

  const keys = Object.keys(circle);
  console.log(keys);

  // we can also use in operator to check whether the property is present or not in the object.
   if("radius" in circle)
   console.log("circle has a radius");

// ABSTRACTION-> IT is a key concept of OOPS and its main goal is to hide the complexity by hiding unnecessary details from the user. This can really mess up ur code if do not implement it.

//how we can implement it?
/* We can implement it by defining the methods and property as a local variable and function in the parent function and then use it due to the closure in the child function.

Closure-> closure is the fuction that uses the parents local variable. these variable stay in memory and initialised after every time the child function is called.
*/

function Circle(radius){
    this.radius=radius;

    let defaultLocation={x:0, y:0};

    let computeOptimumLocation=function(factor){
        //...
    }

    this.draw=function(){
        this.computeOptimumLocation(0.1);

        console.log("draw");
    }
}

    const circle = new Circle(10);
    circle.draw();
    


/* In the above code we defined the default location as a local variable in the Circle function and computeOptimumLocation as the local function.
   In this way we have abstracted both default location and computeOptimumLocation function to the Circle we cannot access these outside this function due to the limited scope of the variables.
 */

//Getters/Setters-> Getters and Setters are the methods of the object that is use to get and set the private variables of that object respectively.


function Circle(radius){
    this.radius=radius;

    let defaultLocation={x:0, y:0};

    let computeOptimumLocation=function(factor){
        //...
    }
    // we can use this as a getter function this will help us to get the location in the required part of the code.
    this.getDefaultLocation = function(){
        return defaultLocation;
    }

    this.draw=function(){
        this.computeOptimumLocation(0.1);

        console.log("draw");
    }
    Object.defineProperty(this, 'defaultLocation',{
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)
            throw new Error('Invalid location')

            defaultLocation=value;
        }
    })
}

    const circle = new Circle(10);
    circle.draw();
    
/* In the above code we used the Object.defineProperty method. This method is used to define property directly on the object or modifies an existing property on an object and returns the object.
   it takes three parameter first the name of object to be called on.Second the name of the property to be added, third the implementation of that property.

   So now look at the above code we have used this as the first parameter cause we are writing this in the constructor function, we used name as defaultLocation and we used get a special keyword of the javascript as our property of the property object and inside that we simply returned the defaultLocation. and then we defined a set property which will take the value and set that value to the defaultLocation property.
   
*/
