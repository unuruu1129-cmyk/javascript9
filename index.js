// const greet = (name) => {
//   return "Сайн уу," + name + "!";
// };
// console.log(greet("Бат"));
// console.log(greet("Ану"));
// console.log(greet("Номин"));

// const getLength = (word) => {
//   return word.length;
// };
// console.log(getLength("cat"));

// const toUpper = (text) => {
//   return text.toUpperCase();
// };
// console.log(toUpper("JavaScript"));

// const toLower = (text) => {
//   return text.toLowerCase();
// };
// console.log(toLower("APPLE"));

// const getFirstLetter = (word) => {
//   return word.charAt(0);
// };
// console.log(getFirstLetter("banana"));

// const getLastLetter = (word) => {
//   return word.at(-1);
// };console.log(getLastLetter("a"));

// const joinWords = (first, second) => {
//   return first.concat( second);
// };console.log(joinWords("Hello", " world"));

// const cleanText = (text) => {
//   return text.trim();
// };
// console.log(cleanText(" good morning "));

// const repeatWord = (word, count) => {
//   return word.repeat(count);
// };console.log(repeatWord("go", 3));

// const reverseWord = (word) => {
//   return word.split("").reverse().join("");
// };
// console.log(reverseWord("tac"));

// const getPrefix = (word) => {
//   return word.slice(0, 3);
// };console.log(getPrefix("javascript"));

// const getEnding = (word) => {
//   return word.slice(-2);
// };
// console.log(getEnding("apple"));

// const capitalize = (word) => {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// };
// console.log(capitalize("hello"));

// const countVowels = (word) => {
//   let count = 0;
//   for (let i = 0; i <= word.length; i++) {
//     if ("aeiou".includes(word[i])) {
//       count++;
//     }
//   }
//   return count;
// }; console.log(countVowels("cat"));

// const countSpaces = (sentence) => {
//   let count = 0;
//     for (let i = 0; i <= sentence.length; i++) {
//     if (" ".includes(sentence[i])) {
//       count++;
//     }
//   }
//   return count;
// }; console.log(countSpaces("I love coding"));

// const multiply = (a, b) => {
//   return a * b;
// };console.log(multiply(3, 7));

// const square = (number) => {
//   return Math.pow(number, 2);
// };
// console.log(square(-9));

// const getMax = (a, b) => {
//   return Math.max(a, b);
// };
// console.log(getMax(41, 9));

// const sumDigits = (number) => {
//   let sum = 0;

//   const splitted = number.toString().split("");

//   for (let i = 0; i < splitted.length; i++) {
//     sum += Number(splitted[i]);
//   }

//   return sum;
// };

// console.log(sumDigits(8765));

// const calculateAge = (yearOfBirth) => {
//   let currentYear = new Date().getFullYear();

//   return currentYear-yearOfBirth
// };console.log(calculateAge(2010));

// const calculateDiscountedPrice = (price, discountPercent) => {
//   return price - price * (discountPercent / 100);
// };
// console.log(calculateDiscountedPrice(20000, 10));

// const calculatePerimeter = (w, h) => {
//   return (w + h) * 2;
// };console.log(calculatePerimeter(3,8));

// const convertHours = (hours) => {
//   return hours * 60;
// };
// console.log(convertHours(5));

// const reverseNumber = (number) => {
//   let reversed = number.toString().split("").reverse().join("");
//   return Number(reversed)
// };console.log(reverseNumber(50));

// const calculateSum=(number)=>{

//     let calculated= number * (number + 1) / 2
//     return calculated
// };
// console.log(calculateSum(1));

// const calculateFactorial = (number) => {
//   let calculated = 1;
//   for (let i = 1; i <= number; i++) {
//     calculated = calculated * i
//   }
//   return calculated;
// };
// console.log(calculateFactorial(5));

// const calculatePower = (base, exponent) => {
//   return Math.pow(base, exponent);
// };console.log(calculatePower(2, 3));

// const isEven = (number) => {
//   let status = false;
//   if (number % 2 === 0) {
//     status = true;
//   }
//   return status;
// };
// console.log(isEven(6));

// const isEqual = (a, b) => {
//   return (a === b);
// };console.log(isEqual(1,2));

// const isDivisibleByFive = (number) => {
//   return number % 5 === 0;
// }; console.log(isDivisibleByFive(5));

// const getFullName = ({ firstName, lastName }) => {
//   return firstName + lastName;
// }; console.log(getFullName({ lastName: "Болд", firstName: "Бат" }));

// const getProductTotal = ({ price, quantity }) => {
//   return price * quantity;
// };console.log(getProductTotal({ price: 500, quantity: 4 }));

// const createUser = (name, age) => {
//   return "name:" + name + ",age:" + age;
// };
// console.log(createUser("Бат", 20));

// const isStudentPassed = (student) => {
//   return student >= 60;
// }; console.log(isStudentPassed(66));

// const getCity = ({address:{city}}) => {
//   return city;
// };console.log(getCity({address:{ city: "Дархан" }}));

// const getRectangleArea = ({ width, heigth }) => {
//   return width * heigth;
// };
// console.log(getRectangleArea({width: 4, height: 6 }));

// const getProductValues = ({ title, price }) => {
//   return Object.values( {title, price} );
// }; console.log(getProductValues({ title: "Ном", price: 5000 }));

