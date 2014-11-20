// load jquery always
$(document).ready(function() {
var numbers = [4, 2, 5, 1, 0, 3];
  document.write("<p>default sort " + numbers + "</p>");

// sort using bubble sort

function bubbleSort(numbers)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < numbers.length-1; i++) {
            if (numbers[i] > numbers[i+1]) {
                var temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
 
bubbleSort(numbers);



  document.write("<p>bubble sort " + numbers + "</p>");

// sort using javascript sort

  document.write("<p>javascript.sort method " + numbers.sort() + "</p>");
});