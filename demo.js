inputname = document.getElementById("inputname")
age = document.getElementById("age")
form= document.getElementById("form")
course = document.getElementById("course")
mail = document.getElementById("mail")
table = document.querySelector(".one")

function  addelement(event) {
        event.preventDefault();
        row = document.createElement("tr");
        row.innerHTML = `
            <td>${inputname.value}</td>
            <td>${age.value}</td>
            <td>${form.gender.value}</td>
            <td>${course.value}</td>
            <td>${mail.value}</td>
            <td><button onclick="changeRow(event)">delete</button></td>
        `

        table.append(row)
        inputname.value = ""
        age.value = ""
        mail.value = ""
        form.gender.value=""
        course.value = ""
    }

function changeRow(event) {
        button = event.target
        row = button.closest("tr");
        row.remove();
    }

