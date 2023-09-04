let listArray = [];

let checkBoxes = document.querySelectorAll(".checkbox");

for (let checkbox of checkBoxes) {
  checkbox.addEventListener("click", function (e) {
    if (e.target.checked == true) {
      listArray.push(e.target.value);
      console.log(listArray);
    } else {
      listArray = listArray.filter((val) => val !== e.target.value);
      console.log(listArray);
    }
  });
}
