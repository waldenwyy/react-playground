function avg(...args) {
    var sum = 0;
    for (let value of args) {
        sum += value;
    }
    return sum / args.length;
}
avg(2, 3, 4, 5); // 3.5  

// constructor
function Person(first, last) {
    this.first = first;
    this.last = last;
}
// method function using '.prototype' becomes available to all instances of the constructor via 'this' object.
Person.prototype.fullName = function () {
    return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function () {
    return this.last + ', ' + this.first;
};

// closure: A closure is the combination of a function and the scope object 
// in which it was created. Closures let you save state — as such, they can often be used in place of objects.
function makeAdder(a) {
    return function (b) {
        return a + b;
    };
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
add5(6); // 11
add20(7); // 27