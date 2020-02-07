range = function(a,b,c) {
    let mass = [];
    if (a < b) {
        for (let i = 0; a<=b; i++) {
            mass[i] = a;
            a = a + c || a + 1;
        };
        return mass;
    };
    for (let i = 0; a>=b; i++) {
        mass[i] = a;
        a = a + c || a + 1;
    };
    return mass;
}

sum = function(mass) {
    s = 0;
    for (let i = 0; i < mass.length; i++) s = s + mass[i];
    return s;
}

console.log(sum(range(1,10)));
console.log(range(5,2,-1));


