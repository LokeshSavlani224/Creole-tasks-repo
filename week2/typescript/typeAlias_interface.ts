type id = number;
type name = string;
type age = number;

interface student {
  id: id;
  name: name;
  age: age;
}

const PId: id = 1;
const PName: name = "xyz";
const PAge: age = 10;

let student2: student = {
  id: PId,
  name: PName,
  age: PAge,
};
console.table(student2);
