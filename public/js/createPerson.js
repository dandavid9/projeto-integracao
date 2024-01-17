"use strict"

let container = undefined
let taskApi = new TaskApi()
let formManager = new Form();

window.addEventListener("load", async () => {
    const personForm = formManager.createPersonForm(async (personToCreate) => {
        await taskApi.createPerson(personToCreate)
        personForm.reset();
    });
})

