function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const addTwoNumbersResult = addTwoNumbers(2, 2);
console.log(addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const convertHoursToMinutesResult = convertHoursToMinutes(4);
console.log(convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name;
}
console.log(getGreeting('World!'));

function addAndMultiplyByFive(num1, num2) {
  return (num1 + num2) * 5;
}
console.log(addAndMultiplyByFive(3, 6));

function multiplyAndDivideByFive(num1, num2) {
  return (num1 * num2) / 5;
}
console.log(multiplyAndDivideByFive(5, 5));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log(subtractTwoNumbers(30, 15));

function getCircumference(radius) {
  return (radius * 2) * 3.14;
}
console.log(getCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log(getFullName('Patrick', 'Star'));

function cube(number) {
  return number * number * number;
}
console.log(cube(5));
