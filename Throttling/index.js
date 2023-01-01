let counter = 0;
const Expensive = (args) => {
  // Heavy API CALL
  console.log("Expensive API CALLED!!", counter++, args);
};

const Throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const BetterWay = Throttle(Expensive, 300);
