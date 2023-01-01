let counter = 0;
const API = (args) => {
  // Heavy API CALL
  console.log("API CALLED!!", counter++, args);
};

const Debounce = (fn, d) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

const BetterWay = Debounce(API, 300);
