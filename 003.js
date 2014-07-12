/* 
 * Largest prime factor
 * Problem 3
 * Published on 02 November 2001 at 06:00 pm [Server Time]
 * The prime factors of 13195 are 5, 7, 13 and 29.

 * What is the largest prime factor of the number 600851475143 ?
 */

var getLargestPrimeFactor = function(){
	"use strict";

	var number = 600851475143;
	var factor = 2;
	var largestPrimeFactor = 1;

	while(number > 1){
		if (number % factor === 0){

			if (factor > largestPrimeFactor){
				largestPrimeFactor = factor;
			}

			number /= factor;
			factor = 2;
		}
		else{
			factor++;
		}
	}

	return largestPrimeFactor;
};

console.log(getLargestPrimeFactor());