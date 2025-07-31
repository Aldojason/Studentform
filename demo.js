const inputname = document.getElementById("inputname");
const age = document.getElementById("age");
const form = document.getElementById("form");
const course = document.getElementById("course");
const mail = document.getElementById("mail");
const table = document.querySelector(".one tbody");

function addelement(event) {
  event.preventDefault();

  const gender = form.gender.value;

  if (!inputname.value || !age.value || !gender || !mail.value) {
    alert("Please fill all the fields.");
    return;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${inputname.value}</td>
    <td>${age.value}</td>
    <td>${gender}</td>
    <td>${course.value}</td>
    <td>${mail.value}</td>
    <td><button onclick="changeRow(event)">Delete</button></td>
  `;

  table.appendChild(row);

  inputname.value = "";
  age.value = "";
  mail.value = "";
  form.gender.value = "";
  course.value = "JavaScript";
}

function changeRow(event) {
  const row = event.target.closest("tr");
  row.remove();
}
