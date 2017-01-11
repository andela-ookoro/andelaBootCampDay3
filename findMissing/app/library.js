/**
 * A function to search for the only different number between two arrays 
 * @Author okorocelstine@gmail.com (Okoro Celestine)
 */
'use strict';

var findMissing= function(arr1, arr2) {

	// check for the difference in length 
	var arr1Length =arr1.length,
		arr2length =arr2.length,
		lengthDifference = arr1Length - arr2length;
	if ( lengthDifference === 0 ) {
		return 0;
	} else  {

		// create variable to store the array 
		var shorterArray = (lengthDifference > 0) ? arr2 : arr1,
			LongerArray = (lengthDifference < 0) ? arr2 : arr1,
			sumOfShorterArray=0,
			sumOfLongerArray=0;
		 for (var i=0; i<LongerArray.length;i++) {

		 		if(i<shorterArray.length)  {

		 			sumOfShorterArray += shorterArray[i];	
		 		}

		 		sumOfLongerArray += LongerArray[i];
		 }

		 return sumOfLongerArray - sumOfShorterArray;

	}

}

module.exports = findMissing;

