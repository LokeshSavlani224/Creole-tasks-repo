let object: { objectName: string; objectId: number } = {
  objectName: "object",
  objectId: 123,
};
console.log("the basic object gives:-", object);

//optional properties

let optionalProperties: { objName: string; objId?: number } = {
  //here ? represents optional property
  objName: "optionalObject",
};
optionalProperties.objId = 321;
console.log("the optional properties gives:-", optionalProperties);

//index signatues
let indexSignatureObject: { [index: string]: number } = {};
indexSignatureObject.id = 45;
console.log("the indexSignature output is:", indexSignatureObject);
