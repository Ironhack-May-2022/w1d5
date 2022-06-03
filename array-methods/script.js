console.log('array methods')
// map -> changes every element of an array - the length
// of the array does not get changed
// map creates a new array

const numbers = [1, 2, 3, 4, 5, 6]

const doubled = numbers.map(function (el) {
	// console.log(el)
	return el * 2
})
// console.log(doubled)
// console.log(numbers)

const result = []
const doubled2 = numbers.forEach(function (el) {
	result.push(el * 2)
})
// console.log(result)

const beatles = ['john', 'paul', 'george', 'ringo']

const prefixed = beatles.map(function (name, i, arr) {
	// console.log(i, arr)
	return 'mr ' + name
})
console.log(prefixed)

const students = [
	{
		name: "Tony Parker",
		firstProject: 80,
		secondProject: 75
	},
	{
		name: "Marc Barchini",
		firstProject: 84,
		secondProject: 65
	},
	{
		name: "Claudia Lopez",
		firstProject: 45,
		secondProject: 95
	},
	{
		name: "Carolina Perez",
		firstProject: 85,
		secondProject: 72
	}
];
console.clear()
// 1. map over students and create an array containing only the names
// ['Tony Parker', 'Marc Barchini', etc]

const studentNames = students.map(function (student) {
	return student.name
})
console.log(studentNames)

// 2. map over students and change the array to:
// [{
// 		name: <name of the student>,
//		total: <proj 1 and proj 2 added together> 
// }]

// [{name: 'Tony Parker', total: 124}, {}, ...]

const scores = students.map(function (student) {
	return {
		name: student.name,
		total: student.firstProject + student.secondProject
	}
})
console.log(scores)

// reduce -> it reduces an array to one value

const nums = [2, 4, 6, 8]

const sum = nums.reduce(function (prev, curr) {
	// console.log('prev: ', prev)
	// console.log('curr: ', curr)
	return prev + curr
})

console.log(sum)

const words = ['foo', 'bar', 'baz']
const length = words.reduce(function (prev, curr) {
	console.log('prev: ', prev)
	console.log('curr: ', curr)
	return prev + curr.length
}, 0)
console.log(length)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const people = [
	{ name: "Candice", age: 25 },
	{ name: "Tammy", age: 30 },
	{ name: "Allen", age: 49 },
	{ name: "Nettie", age: 21 },
	{ name: "Stuart", age: 17 }
];

// use reduce to sum up all the ages of the people
const ages = people.reduce(function (sum, val) {
	return sum + val.age
}, 0)

console.log(ages)


const product = {
	name: "AmazonBasics Apple Certified Lightning to USB Cable",
	price: 7.99,
	manufacter: "Amazon",
	reviews:
		[
			{
				user: "Pavel Nedved",
				comments: "It was really usefull, strongly recommended",
				rate: 4
			},
			{
				user: "Alvaro Trezeguet",
				comments: "It lasted 2 days",
				rate: 1
			},
			{
				user: "David Recoba",
				comments: "Awesome",
				rate: 5
			},
			{
				user: "Jose Romero",
				comments: "Good value for money",
				rate: 4
			},
			{
				user: "Antonio Cano",
				comments: "It broked really fast",
				rate: 2
			},
		]
}

// sum up all the rates of this product using reduce
// console.log(product.reviews)
const rates = product.reviews.reduce(function (prev, curr) {
	return prev + curr.rate
}, 0)
console.log(rates)

console.clear()

// filter -> filters an array 

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter out the even numbers
const evens = nums2.filter(function (num) {
	// if (num % 2 === 0) {
	// 	return true
	// } else {
	// 	return false
	// }
	return num % 2 === 0
})
console.log(evens)

const largerThanThree = nums2.filter(function (num) {
	return num > 3
})
console.log(largerThanThree)

console.clear()

const places = [
	{
		title: "Awesome Suite 20' away from la Rambla",
		price: 200,
		type: "Private Room",
		pool: true,
		garage: false
	},
	{
		title: "Private apartment",
		price: 190,
		type: "Entire Place",
		pool: true,
		garage: true
	},
	{
		title: "Apartment with awesome views",
		price: 400,
		type: "Entire Place",
		pool: false,
		garage: false
	},
	{
		title: "Apartment in la Rambla",
		price: 150,
		type: "Private Room",
		pool: false,
		garage: true
	},
	{
		title: "Comfortable place in Barcelona´s center",
		price: 390,
		type: "Entire place",
		pool: true,
		garage: true
	}
];

// 1. filter out all the places with a price above 300

const prices = places.filter(function (el) {
	if (el.price > 300) {
		return true
	}
})

console.log(prices)
// 2. write a function that gets an array of places and returns
// an array that only contains the titles of all places 
// with a pool

function filterTitles(arr) {
	// filter out the pools
	const pools = arr.filter(function (el) {
		if (el.pool) return true
		// return el.pool
	})
	// get the titles
	const result = pools.map(function (el) {
		return el.title
	})
	return result
}

const titles = filterTitles(places)
console.log(titles)

// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

function gooseFilter(birds) {
	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

	// filter birds -> for every bird that is not contained 
	// in 'geese' we return true -> add it to the result
	const filtered = birds.filter(function (bird) {
		// is bird not contained in geese
		// if (geese.indexOf(bird) === - 1) {
		//   return true
		// }
		return !geese.includes(bird)
	})
	return filtered
};

// reverse()
// reverses an array

const nums3 = [7, 5, 3, 1,]
const reversed = nums3.reverse()
console.log(reversed)
console.log(nums3)

// if you want to reverse a string you need to 
// change it to an array first to be able to use
// reverse()
console.clear()
// split()

const str = 'bobafaeatt'

const arr = str.split(' ')
// this get's you the number of 'a's
const amountOfChars = str.split('a').length - 1
console.log(arr)
console.log(amountOfChars)

console.clear()

const s = 'bobafett'
const ar = s.split('')
ar.reverse()
// change an array to a string
const revStr = ar.join('')
console.log(revStr)
// you can do this in one go
// console.log('abc'.split('').reverse().join(''))

// join can also get a parameter
// 'afajkad'.split('').join('*') -> 'a*f*a*j*k*a*d' 

// sort


