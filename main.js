let listArray = [];

let checkBoxes = document.querySelectorAll(".checkbox");
let formCheckList = document.getElementById("formCheckList");
let submitBtn = document.getElementById("submitBtn");
let myTable = document.getElementsByClassName("myTable");
let tableRow = document.getElementById("tableRow");
let data = document.getElementById("sd");

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

function tableShow() {
  for (let i = 0; i < listArray.length; i++) {
    let th = document.createElement("th");

    var cellText = document.createTextNode(listArray[i]);
    th.appendChild(cellText);
    tableRow.appendChild(th);
  }
}

function dataShow() {
  data.innerText = listArray.toString();
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  tableShow();
  dataShow();
});
