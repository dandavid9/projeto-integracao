"use strict"

let container = undefined
let taskApi = new TaskApi()

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
}

const onPersonChange = () => {
    const select = document.getElementById("person")
    console.log(select.value)

    taskApi.getPerson(select.value).then(showPerson)

}

/**
 * 
 * @param {Person} person
 */
const showPerson = (person) => {
    container.innerText = ""
    const nome = document.createElement("h1")
    nome.innerText = person.firstName + " " + person.lastName
    container.appendChild(nome)

    taskApi.getTarefasByPerson(person.idPerson).then(showPersonTasks)

}

/**
 * 
 * @param {Tarefa[]} tarefas
 */
const showPersonTasks = (tarefas) => {
    tarefas.forEach(tarefa => {
        const divTarefa = document.createElement("div")
        const titulo = document.createElement("h2")
        titulo.innerText = "Titulo: " + tarefa.titulo
        const descricao = document.createElement("h3")
        descricao.innerText = "Descrição: " + tarefa.descricao
        const data = document.createElement("h4")
        data.innerText = "Data: " + tarefa.data
        const status = document.createElement("h4")
        status.innerText = "Status: " + tarefa.status.statusDesc

        divTarefa.appendChild(titulo)
        divTarefa.appendChild(descricao)
        divTarefa.appendChild(data)
        divTarefa.appendChild(status)
        container.appendChild(divTarefa)
    })

}