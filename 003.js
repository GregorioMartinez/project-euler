/* 
 * Largest prime factor
 * Problem 3
 * Published on 02 November 2001 at 06:00 pm [Server Time]
 * The prime factors of 13195 are 5, 7, 13 and 29.

 * What is the largest prime factor of the number 600851475143 ?
 */

 
 var number = 600851475143;
 var getFactors = function(){
 	"use strict";

 	var factors = [];

 	for (var index = 1; index < number; index++) {
 		
 		if (number % index === 0 && index != 1){
 			factors.push(index);
 		}
 	}

 	return factors;
 };

 var largestPrime = function(factors){

 	var hold  = 0,
 	prime = 0;


 	for (var index = factors.length - 1; index >= 0; index--) {
 		isPrime = true;
 		count = 0;

 		while(isPrime === true){

 			if (factors[index] % factors[count] === 0){
 				isPrime = false;
 			}

 			hold = factors[count];
 			if(hold > prime){
 				prime = hold;
 			}

 			count++;

 		}
 	}

 	return prime;
 };

 console.log(getFactors());
