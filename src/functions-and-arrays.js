// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b)
{
  if(a>b)
  return a;
  else 
  return b;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words)
{
var length=words.length; var longest;
if(length==0)
return null;
else if(length==1)
return words;
else
{
   for( var i=1;i<length;i++){
       longest=words[0];
       if(words[i].length>longest.length)
       longest=words[i];
       else (words[i].length==longest.length)
       longest=words[i];
   }
     
    return longest;
}
}


// Progression #3: Net Price
 const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers)
{
  var sum=0;
  var length=numbers.length;
  if(length==0)
  return 0;
  else
  {
  for(var i=0;i<=length;i++)
  {
    var sum =sum+numbers[i];
  }
  
}
return sum;
} 

// progresion 3.1
/* function add(mixedArr)
{
var length=mixedArr.length;
var sum=0;
for( var i=0;i<length;i++)
{
 if (mixedArr[i]==typeof 'string') 
 {
   length=mixedArr[i].length;
   sum=sum+length;
 }
 else if (mixedArr[i]==typeof 'boolean')
 {
     if(mixedArr[i]=='true')
     sum=sum+1;
     else 
     sum=sum+0;
 }
 else
 sum=sum+mixedArr[i];
}
} */
// Progression #4: Calculate the average
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
 function sumofArray(sum)
{
  var total=numbers.length;
  if(sum==0)
  return 0;
  else
  var avg=sum/total;
  return avg;
} 
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg)
{
  var num=numbersAvg.length;
    var midpoint=num/2;
  return midpoint;
} 

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
 function averageWordLength(wordsArr)
{
  var count=0;
  for(var i=0;i<wordsArr.length;i++)
  {
   count=count+wordsArr[i].length;
  }
  return count/wordsArr.length;
} 
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique)
{
  var unique=[]; var length=wordsUnique.length;
  for( var i=0;i<length; i++)
  {
    if(unique.indexOf(wordsUnique[i])===-1)
    unique.push(wordsUnique[i]);
  }
  return unique;
} 

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind,word)
{
  var n=wordsFind.length;
  var i=0;
  while(i<=n){
    if(wordsFind[i]==word)
    return true;
    else 
    i++;
    }
    return false;
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
 function howManyTimesElementRepeated(wordsCount,word)
 {
var n=wordsCount.length;
var count=0;
for(var i=0;i<n;i++)
{
  if(wordsCount[i]==word)
  count++;
}
return count;
 }
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
