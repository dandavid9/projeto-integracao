"use strict"

let container = undefined
let taskApi = new TaskApi()
let formManager = new Form();

window.addEventListener("load", async () => {
    container = document.getElementById("container");
    container.innerText = ""


    const personDiv = document.createElement("div");
    const personForm = formManager.createPersonForm(async (personToCreate) => {
        await taskApi.createPerson(personToCreate)
        personForm.reset();
    });

    personDiv.appendChild(personForm)
    container.appendChild(personDiv);
})

