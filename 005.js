/*
 * Smallest multiple
 * Problem 5
 * Published on 30 November 2001 at 06:00 pm [Server Time]
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

 var smallestDistributed = function(){
 	"use strict";

 	var number      = 0,
 		ceiling     = 20,
 		isDivisible = true;

	 	for(var index = 0; index <= ceiling; index++){

	 		// If our number does not divide by the index evenly we need to increase our number and reset the index
	 		if (number % index !== 0){			
	 			number++;
	 			index = 0;
	 		}

	 		// If our index has made it to 20 without resetting we've found it
	 		if (index === ceiling) {
	 			return number;
	 		}
	 	}
 };

 console.log(smallestDistributed());