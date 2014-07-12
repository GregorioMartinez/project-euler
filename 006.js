/* 
 * Sum square difference
 * Problem 6
 * Published on 14 December 2001 at 06:00 pm [Server Time]
 * 
 * The sum of the squares of the first ten natural numbers is,
 * 1^2 + 2^2 + ... + 10^2 = 385
 * 
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * 
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */



 var sumSquareDiff = function(){
 	"use strict";

 	var ceiling = 100,
	 	diff    = 0,
	 	sumSq     = 0,
	 	sqSum   = 0;

 	for (var index = 0; index <= ceiling; index++) {
 		sumSq   += index * index;
 		sqSum += index;
 	}

 	sqSum *= sqSum;

 	return sqSum - sumSq;

 };

 console.log(sumSquareDiff());