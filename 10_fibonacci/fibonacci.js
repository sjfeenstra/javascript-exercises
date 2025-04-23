const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS"
    }
    arr = [0,1,1]
    for (let i = 2; i <= index; i++) {
        arr.push((arr[i]+arr[i-1]))
    }
    console.log(arr)
    return arr[index]
};

// Do not edit below this line
module.exports = fibonacci;
