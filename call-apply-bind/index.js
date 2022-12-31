let name = {
  firstname: "Daksh",
  lastname: "Lakhotiya",
  printfullName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};
name.printfullName();

let printbio = function (hometown, state, country) {
  console.log(
    this.firstname + " from " + hometown + ", " + state + ", " + country
  );
};

let name2 = {
  firstname: "Sachin",
  lastname: "Bhaiya",
};

// FUNCTION BORROWING
name.printfullName.call(name2);

printbio.call(name2, "Nathdwara", "Rajasthan");
printbio.apply(name2, ["Haridwar", "Uttrakhand"]);

// Bind Method - Creates copy of the function and binds it to the object and returns the function.
let printX = printbio.bind(name, "Mumbai", "Maharashtra");
console.log(printX);
printX("india");

// Write A custom bind method.

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};
let func = printbio.mybind(name2, "Udaipur", "Rajasthan");
func("India");
