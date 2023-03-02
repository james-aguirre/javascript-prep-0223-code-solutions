const person = {
  firstName: 'James',
  lastName: ' Aguirre',
  hobby: 'weightlifting'
};
console.log(person);
const fullName = person.firstName + person.lastName;
console.log(fullName);
person.job = 'monkey';
console.log(person.job);
person['previousJob'] = 'chimp';
console.log(person['previousJob']);
console.log(person);
