var count = 0;
const text = document.querySelector("#txt-count");
const inc = document.querySelector("#btn-increment");
const dec = document.querySelector("#btn-decrement");

inc.addEventListener("click", () => {
  count += 1;
  text.innerHTML = count;
});

dec.onclick = function () {
  count -= 1;
  text.innerHTML = count;
};
console.log(count);
