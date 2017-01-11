/**
 * A class to extend the Array class and implement the binary search algorithm
 * @Author okorocelstine@gmail.com (Okoro Celestine)
 */
'use strict'

var MyArray =function() { 

  // function to return the array [1,2,3,...,20]
  Array.prototype.toTwenty= function() {
        var series =[],
            lastTerm = 20,
            currentNumber =1;
        while (currentNumber <= lastTerm ) {
          series.push(currentNumber);
          currentNumber++;
        }
        return series

    }
    
  // function to return the array [2,4,6,...,40]
  Array.prototype.toForty= function() {
        var series =[],
            lastTerm = 40,
            currentNumber =2;
        while (currentNumber <= lastTerm ) {
          series.push(currentNumber);
          currentNumber += 2;
        }
        return series
    }

  // function to return the array [10,20,30,...,1000]
  Array.prototype.toOneThousand= function() {
        var series =[],
            lastTerm = 1000,
            currentNumber =10;
        while (currentNumber <= lastTerm ) {
          series.push(currentNumber);
          currentNumber += 10;
        }
        return series
    }

    // Function to search for a number in an array using binary search
    Array.prototype.search= function(searchNum) {
           var count = 0,
              length = this.length,
              index = 0,
              startIndex = 0,
              stopIndex = length - 1,
              // store the fraction of the searchNUm to the largest number in the array
              fractionOfLastTerm = searchNum/ this[length-1];
              // return 9 for 9.5 
              wholeNum = Math.floor(fractionOfLastTerm * (length-1));
              fractionNUm =fractionOfLastTerm * (length-1);
              middle = ( wholeNum > fractionNUm) ? wholeNum-1:wholeNum;
       //var middle = fractionOfLastTerm * (length-1);
      // return middle;

       while(this[middle] != searchNum && startIndex < stopIndex) {

                //adjust search area
                if (searchNum < this[middle]){
                    stopIndex = middle - 1;
                } else if (searchNum > this[middle]){
                    startIndex = middle + 1;
                }

                //recalculate middle
                middle = Math.floor((stopIndex + startIndex)/2);
                count++;
            }

            //check if the num exists in the array, if not return -1
              index =  (this[middle] != searchNum) ? -1 : middle;
       var result = {
            count : count,
            index : index,
            length : length
          };
          return result;
    

    }


}();

module.exports = MyArray;

