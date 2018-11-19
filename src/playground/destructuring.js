// console.log('destructuring!');


// const person = {
// 	name: 'Wes',
// 	age: 38,
// 	location: {
// 		city: 'Cayucos',
// 		temp: 59
// 	}
// };

// const {name, age} = person;
// console.log(`${name} is ${age}.`);


// const {city, temp: temperature} = person.location;
// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}.`);
// }


// const book = {
// 	title: 'Way of the Seal',
// 	author: 'Wes Nimmo',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const {name: publisherName = "Whatever"} = book.publisher;
// console.log(publisherName);


const item = ['Coffee (iced)', '$2.00', '$200', '$2.75'];

const [drink, , price] = item;

console.log(`A large ${drink} for ${price}.`);









