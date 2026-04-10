let input = document.getElementById("characterInput");
let count = document.getElementById('count')
input.addEventListener("input", () => {
  let inputValue = input.value.length
  count.innerText = inputValue
});
