let deepEqual = function(a,b) {
    if (typeof(a) != 'object' && typeof(b) != 'object' && a === b) return true;
    else if (typeof(a) != 'object' && typeof(b) != 'object' && a != b) return false;
    else if (typeof(a) != 'object' || typeof(b) != 'object') return false;
    else {
        let l = 0
        for (let key in a) {
            if (typeof(a[key]) == 'object' && typeof(b[key] == 'object')) return rt = deepEqual(a[key] , b[key]); 
            else if (a[key] != b[key]) return false; 
        }
        return true;
    }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj,obj));
console.log(deepEqual(obj,{here: 1, object: 2}));
console.log(deepEqual(obj,{here: {is: "an"}, object: 2}));




