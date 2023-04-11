// Write a function that takes in a string and returns it when reversed
// let food = “eating”

function str(string){
    let rev = string.reversed();
    return rev;

}
let food = "eating";
console.log(str(food));


// Write a function that takes in the following array and consoles the target if it is found else
// null
let num = [2,8,0,23,5,45,76]
// let target = 23;

function division(num) {
    if (num.length<=1) {
        return num;
    }
    let middle = Math.floor(num.length/2);
    let left = num.slice(0, middle);
    let right = num.slice(middle);
    return msort(division(left), division(right));
}

function msort(left, right) {
    let emp = [];
    while (left.length && right.length) {
    
        if (left[0]<right[0]) {
            emp.push(left.shift());
        }
        else{
            emp.push(right.shift());
        }
    }
    return [...emp, ...left, ...right]
}
let sortedArr = division(num);
console.log(sortedArr);

//Finding target
function binarysearch(arr, target){
    
    let left = 0;
    let right = arr.length-1;

    while (left<=right) {
        let mid = Math.floor((left+right)/2);
        if (arr[mid]===target) {
            return mid;
    }
        else if (arr[mid]< target) {
            left = mid+1;
    }
        else{
            right = mid-1;
        }
            }
            console.log(null);
        }
let target = 23;
console.log(binarysearch(sortedArr,target));

// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”


// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
let numbers = 0.
for (let number = 0; number < array.length; number++) {
    if (number%3==0 && number%5==0) {
        console.log('FizzBuzz');
    }

    else if (number%3==0) {
        console.log('Fizz');

    }
    else if(number%5==0) {
        console.log('Buzz');
    }

    else{
        console.log(number);
    } 
}


// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]
function arrOfNums(array){
    for (const n in numArray) {
        let e = [];
        let r = e.push(numArray[n]*4);
        // n++;
        return e
            
        }
    }
    // for (let n = 0; n < array.length; n++) {
    //     let emptyArr = [];
    //     let r = emptyArr.push(numArray[n]*4);
    //     n++;
    //     return emptyArr
        

        // n*4;
        // return emptyArr.push(numArray[n]*4)
    
    

console.log(arrOfNums(numArray));

// Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
function arrStrings(arr){
    for (let s = 0; s < arr.length; s++) {
        return parseInt(arr[s]);
    }
}
let nums = ['10', '24', '45', '56', '67'];
console.log(arrStrings(nums));

