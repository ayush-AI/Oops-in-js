// In the ES6 javaScript get the feature of classes.

/* Classes are the template to form new objects.We use classes to create objects with the different values of the same property.
   for example:- suppose an object is car so the car can be of various types and we will differentiate them on the basis of the properties we define. 
   if there wouldn't be a class our code will be more noisy we have to define the same properties everytime for different objects and this isn't a good approach.
   so thats why we need classes.

   // how to create classes?
    we can create classes by using class keyword and the first letter of the name of the class should be of uppercase.
    we use constructor function to initialize some properties of class by taking some input while the creation so that object distinguises from the other object.
    Below is the example of a class.
*/
class Planets{
    constructor(_name, position, noOfMoons, material){
        //these are called properties we learned about this in index.js
        this.name=_name;
        this.position=position;
        this.material=material;
        this.noOfMoons=noOfMoons;
    }
    
    orbit() {
        console.log(`${this.name} orbits around sun` );
    }
    
}
const earth=new Planets('Earth',4,1,'aluminium and sillica');
 
earth.orbit();

//Getter and Setters are the function which uses property type syntax to execute.
/* We have discussed it in the previous part but in this part we will see a new way to apply these getter and setters.
   we will apply these this time by just using get and set keyword.
*/
class Square{
    constructor(width){
        this.width=width;
        this.height=width;
    }
    get area(){
        return this.width*this.height;
    }

    set area(area){
        this.width=Math.sqrt(area);
        this.height=this.width;
    }

    //this is a static method (defination is below the code)

    static equals(a,b){
        return a.width===b.width;
    }
}
const square1 =new Square()
square1.area=16;    // this is for setting the area
square1.area;       //this is for getting the area


//Static methods-> static methods for a class is method which is called directly on the class not on the instances of the class.
// It can be created by using static keyword

const square2= new Square(4);
const square3= new Square(5);

console.log(Square.equals(square3,square2));   //this will give u the answer in the console that both the square are equal or not.

//Inheritance-> In this concept method and property of the parent class are copied to the children class
// we can make child component by usind extend keyword.
/* Here in below code we have created a person class which has a children programmer class. We created the children class by using extend keyword and passing the name and the age to super function which calls the constructor of the parents function.
   Name and the age property is inherited by the parent class and the years of experience is the custom property of the child class. Methods of the parent class can also be inherited by the child class. 
*/

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
      describe(){
          console.log(`I am ${this.name} and I am ${this.age} years old.`);
      }

}
 class Programmer extends Person{
     constructor(name,age,yearsOfExperience){
         super(name,age);

         this.yearsOfExperience;
     }
     code(){
         console.log(`${this.name} is coding`);
     }
 }

 const PROGRAMMERS=[
     new Programmer('Ayush', 21, 1),
     new Programmer('Piyush', 22, 2)
 ]
   
 function developSoftware(programmers){
     
    //develop software
    for(let programmer of programmers){
        programmer.code();
    }
 }
 developSoftware(PROGRAMMERS);

 //Polymorphism-> Polymorphism means many form. In oop we define the same method in parent and child and the child overrides the method with new implication this is polymorphism.
 /* In the below code we have defined animal class and the dog as the children class.
    In the both the class we have defined makeSound method which both have different implication.
*/
class Animal{
    constructor(name){
        this.name=name;
    }

    makeSound(){
        console.log('Generic Animal Sound');
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
    }
    
    makeSound(){
        super.makeSound();  // this will call the parent makeSound method
        console.log('Woof! Woof!');
    }
}
const a1= new Animal("Ayush");
const a2= new Dog("Piyush");

a2.makeSound();