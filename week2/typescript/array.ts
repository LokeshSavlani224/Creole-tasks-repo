const days: string[] = [];
days.push("Monday"); //allowed
//days.push(1) not allowed as it is a number and array is of string
console.log(days);

//Readonly array
const days2: readonly string[] = ["Saturday"];
//days.push("Sunday");// not allowed
console.log(days2);

//type interface
const day = ["Sunday", "Monday", "Tuesday"];
day.push("Wednesday"); //allowed
//days.push(4);//not allowed
day.push("Thursday"); //allowed

console.log(day);
