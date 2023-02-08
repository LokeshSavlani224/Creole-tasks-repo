let myTuple: [number, boolean, string];
myTuple = [0, false, "hello myself"]; //allowed
myTuple.push(true); //possible as we dont have any security for 3+ attributes
//myTuple = ["hello myself",0,false] //not allowed
console.log("my simple tuple is:-", myTuple);

//readonly tuples
let readonlyTuple: readonly [number, boolean, string] = [2, true, "hello"];
//readonlyTuple.push(true);//not possible as it is readonly
console.log("readonlyTuple gives:-", readonlyTuple);

//named tuples
let person: [name: string, age: number, email: string];
person = ["name", 20, "xyz@email.com"]; //represents what does the index represent
console.log("the named tuple gives output:-", person);

//destructuring tuples
let destructureTuple: [x: number, y: number] = [10, 20];
let [a, b] = destructureTuple; // we can destructure the tuple
console.log("the output using destructured tuples is:-", a, b);
