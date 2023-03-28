document.getElementsByTagName("form")[0].addEventListener("click", function (e) {
  e.preventDefault()
})

let counter1 = 0;
let counter2 = 0;
document.getElementById("item1Amount").innerText = counter1;
  document.getElementById("item2Amount").innerText = counter2;
  




document.getElementById("decrement1").addEventListener("click", function () {
  if (counter1 == 0) {
    return;
  }
  counter1--;
  document.getElementById("item1Amount").innerText = counter1;
});


document.getElementById("increment1").addEventListener("click", function () {
  counter1++;
  document.getElementById("item1Amount").innerText = counter1;

});


document.getElementById("decrement2").addEventListener("click", function () {
  if (counter2 == 0) {
    return;
  }
  counter2--;
  document.getElementById("item2Amount").innerText = counter2;

});

document.getElementById("increment2").addEventListener("click", function () {
  counter2++;
  document.getElementById("item2Amount").innerText = counter2;

});
