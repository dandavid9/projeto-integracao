"use strict"

class Form {

    constructor() {
    }

    createPersonForm(onSubmitCallback) {
        const form = document.createElement("form")

        const firstNameLabel = document.createElement("label")
        firstNameLabel.innerText = "Primeiro Nome"
        const firstNameInput = document.createElement("input")
        firstNameInput.required = true

        const lastNameLabel = document.createElement("label")
        lastNameLabel.innerText = "Ultimo Nome"
        const lastNameInput = document.createElement("input")
        lastNameInput.required = true

        const emailLabel = document.createElement("label")
        emailLabel.innerText = "Email"
        const emailInput = document.createElement("input")
        emailInput.required = true

        const submitButton = document.createElement("input")
        submitButton.value = "Criar"
        submitButton.type = "submit"

        form.appendChild(firstNameLabel)
        form.appendChild(firstNameInput)
        form.appendChild(lastNameLabel)
        form.appendChild(lastNameInput)
        form.appendChild(emailLabel)
        form.appendChild(emailInput)
        form.appendChild(submitButton)




        form.onsubmit = async (ev) => {
            ev.preventDefault();

            const personToCreate = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                email: emailInput.value,
                tarefas: []
            }

            onSubmitCallback(personToCreate);

        }

        return form
    }

    createTarefaForm(onSubmitCallback) {
        const form = document.createElement("form")

        const tituloLabel = document.createElement("label")
        tituloLabel.innerText = "Titulo"
        const tituloInput = document.createElement("input")
        tituloInput.name = "titulo"
        tituloInput.required = true

        const descricaoLabel = document.createElement("label")
        descricaoLabel.innerText = "Descrição"
        const descricaoInput = document.createElement("input")
        descricaoInput.name = "descricao"
        descricaoInput.required = true

        const dataLabel = document.createElement("label")
        dataLabel.innerText = "Data"
        const dataInput = document.createElement("input")
        dataInput.type = "date"
        dataInput.name = "data"
        dataInput.required = true

        const statusLabel = document.createElement("label")
        statusLabel.innerText = "Status"
        const statusInput = document.createElement("input")
        statusInput.name = "status"
        statusInput.required = true

        const submitButton = document.createElement("input")
        submitButton.value = "Criar"
        submitButton.type = "submit"

        form.appendChild(tituloLabel)
        form.appendChild(tituloInput)
        form.appendChild(descricaoLabel)
        form.appendChild(descricaoInput)
        form.appendChild(dataLabel)
        form.appendChild(dataInput)
        form.appendChild(statusLabel)
        form.appendChild(statusInput)
        form.appendChild(submitButton)

        form.onsubmit = (ev) => {
            ev.preventDefault()

            const tarefaToCreate = {
                titulo: tituloInput.value,
                descricao: descricaoInput.value,
                data: dataInput.value,
                statusId: statusInput.value,
            }

            onSubmitCallback(tarefaToCreate)

        }

        return form
    }

}