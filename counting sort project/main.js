let a = document.getElementById("inputArr");
let submit = document.getElementById("btn");
let output = document.getElementById("output");

function countingSort(a) {
  let c = [];
  let k = Math.max(...a);
  console.log(k);
  for (let i = 0; i <= k; i++) {
    c[i] = 0;
  }
  for (let j = 0; j < a.length; j++) {
    c[a[j]] = c[a[j]] + 1;
  }
  for (let i = 1; i <= k; i++) {
    c[i] = c[i] + c[i - 1];
  }
  let b = new Array(a.length).fill(0);
  for (j = a.length - 1; j >= 0; j--) {
    b[c[a[j]] - 1] = a[j];
    c[a[j]] = c[a[j]] - 1;
  }
  return b;
}
submit.addEventListener("click", function (e) {
  let arr = a.value.trim().split(" ").map(Number);
  let b = countingSort(arr);
  output.innerHTML = b;
  e.preventDefault();
});
