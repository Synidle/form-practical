const childrenRadio = document.getElementsByName("has-children");
const petsRadio = document.getElementsByName("other-pets");
const form = document.getElementById("form");
//const submitButton = document.getElementById("submit");

let formObj = {
    name: "",
    email: "",
    phone: "",
    outsideSpace: false,
    children: false,
    childAge: 0,
    pets: false,
    petSpecies: ""
}

for (let rb of childrenRadio)
    rb.addEventListener("change", (event) => 
        toggleConditional(event, "div-child-age", "child-age"));
for (let rb of petsRadio)
    rb.addEventListener("change", (event) =>
        toggleConditional(event, "div-species", "species"));

form.addEventListener("submit", function(event) {
    console.log("submit");
    formObj.name = document.getElementById("name").value;
    formObj.email = document.getElementById("email").value;
    formObj.phone = document.getElementById("phone").value;
    formObj.outsideSpace = document.getElementById("yes-outside-space").checked;
    formObj.children = document.getElementById("yes-children").checked;
    formObj.childAge = document.getElementById("child-age").value;
    formObj.pets = document.getElementById("yes-pets").checked;
    formObj.petSpecies = document.getElementById("species").value;
    console.log(formObj);

    if (localStorage.getItem("formData") == null) {
        localStorage.setItem("formData", JSON.stringify([formObj]));
    }
    else {
        let formData = [];
        formData = JSON.parse(localStorage.getItem("formData"));
        formData.push(formObj);
        localStorage.setItem("formData", JSON.stringify(formData));
    }

});

function toggleConditional(event, divID, inputID)
{
    let div = document.getElementById(divID);
    let input = document.getElementById(inputID);

    if (event.target.value == "yes")
    {
        div.style.display = "block";
        input.required = true;
    }
    else
    {
        div.style.display = "none";
        input.required = false;
        input.value = "";
    }
}
