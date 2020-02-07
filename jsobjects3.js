let reversArray = function(a) {
    let z = [];
    p = 0;
    for (let i = a.length - 1 ; i >=0 ; i = i - 1) {
        for (let j = p; j <= a.length - 1; j++) {
            z[j] = a[i];
        }
        p++;
    }
    return z;
};

let reversArrayInPlace = function(a) {
    let z = [];
    p = 0;
    for (let i = a.length - 1 ; i >=0 ; i = i - 1) {
        for (let j = p; j <= a.length - 1; j++) {
            z[j] = a[i];
        }
        p++;
    }
    a = z;
    return a;
}

console.log(reversArray(['A','B','C']));
var arrayValue = [1,2,3,4,5];
console.log(reversArrayInPlace(arrayValue));