"use strict"

let container = undefined
let taskApi = new TaskApi()
let formManager = new Form()

window.addEventListener("load", async () => {
    container = document.getElementById("container");

    
    taskApi.findPerson().then(addPersonsToSelect)


})


/**
 * 
 * @param {Person[]} persons
 */
const addPersonsToSelect = (persons) => {
    const select = document.getElementById("person")
    persons.forEach(person => {
        const option = document.createElement("option")
        option.value = person.idPerson
        option.innerText = person.email
        select.appendChild(option)
    })

    if (select.options.length > 0) {
        taskApi.getPerson(select.value).then(showForm);
    }
}

const onPersonChange = () => {
    const select = document.getElementById("person")
    console.log(select.value)

    taskApi.getPerson(select.value).then(showForm)

}

/**
 * 
 * @param {Person} person
 */
const showForm = (person) => {
    container.innerText = ""

    const texto = document.createElement("h2")
    texto.innerText = "Criar tarefa para: " + person.firstName + " " + person.lastName

    const tarefaDiv = document.createElement("div");
    const tarefaForm = formManager.createTarefaForm((tarefaToCreate) => {
        taskApi.createTarefa(person.idPerson, tarefaToCreate);
        tarefaForm.reset();
    });

    tarefaDiv.appendChild(tarefaForm);
    container.appendChild(texto)
    container.appendChild(tarefaDiv)


}
