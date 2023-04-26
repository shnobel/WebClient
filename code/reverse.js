// 2.4 Write a recursive function that takes an array. 
// The function should return a new array that is the reverse ofthe original array.

function reverseArray(arr) {
    result = [];
    function reverse() {
        if(arr.length == 0) return
        result.push(arr.pop());
        reverse();
    }
    reverse();
    return result;
}

console.log(reverseArray([5,4,3,2,1]));