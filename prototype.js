function Dog(name,breed,weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;

}
Dog.prototype.species = "canine";
Dog.prototype.bark = function(){
    if (this.weight > 35){
        console.log(`${this.name} says woof!!`);
    } else if(this.weight <= 30) {
        console.log(`${this.name} says yip!!`);
    } else{
        console.log(`${this.name} says muuu!!`);
    }
};
Dog.prototype.run = function(){
    console.log("run");
};
Dog.prototype.wag = function(){
    console.log("Wag");
};

var fido = new Dog("Fido","Mixed",40);
var fluffy = new Dog("Fluffy","poodle", 30);
var spot = new Dog("Spot","chimmad", 35);

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();
