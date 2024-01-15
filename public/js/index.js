"use strict"

let container = undefined

window.addEventListener("load", async () => {
    container = document.getElementById("container");


    const taskApi = new TaskApi()

    taskApi.findPerson().then(addPersonsToSelect)

})


/**
 * 
 * @param {Person[]} persons
 */
const addPersonsToSelect = (persons) => {
    const select = document.getElementById("personOptions")
    persons.forEach(person => {
        const option = document.createElement("option")
        option.value = person.idPerson
        option.innerText = person.firstName + " " + person.lastName
        select.appendChild(option)
    })
}
