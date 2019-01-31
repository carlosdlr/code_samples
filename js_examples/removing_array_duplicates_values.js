// 3 ways to remove duplicates in an array

/*******************************************************USING SET************************************************************************************/

//Using Set object. This was introduce in ES6, When you pass in an array, it will remove any duplicate values.

const array = ['a', 1, 2, 'a', 'a', 3];

console.log("Before remove duplicates: " + array)

//step 1
const uniqueSet = new Set(array);

//step 2
const backToArray = [...uniqueSet];

console.log("After remove duplicates using set data structure: " + backToArray);

//Another way to convert a set into an array. One step conversion
console.log("Another way to remove duplicates values in an array using one line of code Array.from(new Set(array)): "+Array.from(new Set(array)));


/***************************************************USING FILTER*************************************************************************************/
/* The filter() method creates a new array of elements that pass the conditional we provide. In other words, if the element passes and returns true, 
it will be included in the filtered array. And any element that fails or return false, it will be NOT be in the filtered array.*/

filteredArray = array.filter((item, index) => {
	console.log(
		item,
		index,
		array.indexOf(item) === index,
		);

	return array.indexOf(item) === index
});

console.log("Removing duplicates values from an array using the filter function: "+filteredArray);

/***************************************************USING REDUCE*************************************************************************************/
/*The reduce method is used to reduce the elements of the array and combine them into a final array based on some reducer function that you pass.*/
reducedArray = array.reduce((unique, item) => {
	console.log(
		item,
		unique,
		unique.includes(item),
		unique.includes(item) ? unique : [...unique, item],
		);

	return unique.includes(item) ? unique : [...unique, item]
}, []);

console.log("Removing duplicates values from an array using the reduce function: "+reducedArray);