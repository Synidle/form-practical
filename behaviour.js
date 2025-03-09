const childrenRadio = document.getElementsByName("has-children");
const petsRadio = document.getElementsByName("other-pets");
const submitButton = document.getElementById("submit");

for (let rb of childrenRadio)
    rb.addEventListener("change", (event) => 
        toggleConditional(event, "div-child-age"));
for (let rb of petsRadio)
    rb.addEventListener("change", (event) =>
        toggleConditional(event, "div-species"));

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
});

function toggleConditional(event, id)
{
    let target = document.getElementById(id);

    if (event.target.value == "yes")
        target.style.display = "block";
    else
        target.style.display = "none";
}
