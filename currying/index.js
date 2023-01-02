let multiply = function (x, y) {
  console.log(x * y);
};

// CLOSURE WAY
let bubliply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = bubliply(3);
multiplyByThree(5);

// SUM(2)(3)(5)(7).....(n)()
let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};
let x = sum(1)(2)(2)(4)(5)(6)();
console.log(x);
