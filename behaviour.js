const childrenRadio = document.getElementsByName("has-children");
const petsRadio = document.getElementsByName("other-pets");
const submitButton = document.getElementById("submit");

for (let rb of childrenRadio)
    rb.addEventListener("change", (event) => 
        toggleConditional(event, "div-child-age", "child-age"));
for (let rb of petsRadio)
    rb.addEventListener("change", (event) =>
        toggleConditional(event, "div-species", "species"));

submitButton.addEventListener("click", (event) => {
    //event.preventDefault();
    //alert("Submit Succesfully!");
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
    }
}
