/* 
 * Summation of primes
 * Problem 10
 * Published on 08 February 2002 at 06:00 pm [Server Time]
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

 *  Find the sum of all the primes below two million.
 */

var primeSum = function(){
	"use strict";

	var sum     = 2,
		ceiling = 2000000,
		primes  = [],
		temp = [];

	primes[0] = 2;

	for(var number = 2; number <= ceiling; number++){
		for(var index = 0; index < primes.length; index++){

			if(number % primes[index] === 0){
				break;
			}
		
			if (index === primes.length - 1) {
				primes.push(number);
				sum += number;
			}
		}
	}

	return sum;

};

console.log(primeSum());