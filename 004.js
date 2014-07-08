/* 
 * Largest palindrome product
 * Problem 4
 * Published on 16 November 2001 at 06:00 pm [Server Time]
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

 * Find the largest palindrome made from the product of two 3-digit numbers.
 */


 var getPalindrome = function(){
 	"use strict";

 	var init     = 999,
 	n1           = init,
 	n2           = init,
 	n3,
 	tail,
 	isPalindrome,
 	hold         = 0;

 	// If we haven't 0'd out yet
 	while(n1 !== 0){
 		
 		// Convert the product of n1 and n2 to a string
 		n3 = String(n1 * n2);
 		// Grab the max index of the current n3
 		tail = n3.length - 1;


 		for (var index = 0; index < n3.length; index++) {

 			// if the first index and the last index don't match, bail.
 			if (n3.charAt(index) !== n3.charAt(tail)) {
 				break;
 			}

 			// Since we haven't bailed yet we know we still have a chance
 			tail--;

 			// If the last index is at 0 we've looped all the way through, we've found a palindrome
 			if (tail === 0){
 				// console.log(n3);
 				// Save the value of the palindrome if it's larger than our curret one
 				if (Number(n3) > hold){
 					// console.log(n3);
 					hold = Number(n3);
 				} 				
 			}
 		}

 		// If we've hit bottom on our n2 we reset it and reduce n1 by 1
 		if (n2 === 0) {
 			n2 = init;
 			n1--;
 		}
 		else{
	 		// reduce n2 otherwise
 			n2--;
 			
 		}

 	}

 	return hold;

 };

 console.log(getPalindrome());