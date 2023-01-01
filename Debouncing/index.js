let counter = 0;
const API = () => {
  // Heavy API CALL
  console.log("API CALLED!!", counter++);
};

const Debounce = (fn, d) => {
  let timer;

  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(context, args);
    }, d);
  };
};
