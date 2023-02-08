var prompts = require("prompt-sync")();

// let n:number="mdsdo";
// console.log(n);

const valueFromUser = (message: string): string => {
  return prompts(message);
};
//for explicit type call
let explicitType: string = valueFromUser("enter the string for explicit type:");
console.log("the output for explicit is:", explicitType);

//for implicit type call
let implicitType = valueFromUser("enter the number for implicit type:");
console.log("the output for implicit is:", implicitType);

//special data types

//for any type call
let anyType: any = valueFromUser("Enter value for any tag");
console.log("the output for any is:", anyType);

//for unknown type call
let unknownType: unknown = valueFromUser("Enter value for unknown tag");
console.log("the output for unknown is:", unknownType);

//never is used for advanced generics..throws error whenever it is called

//undefined
let undefinedType: undefined = undefined;
console.log("the output for undefined is:", undefinedType);

//null
let nullType: null = null;
console.log("the output for null is:", nullType);
