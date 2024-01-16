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
        const statusSelect = document.createElement("select")
        statusSelect.name = "status"
        const option1 = document.createElement("option")
        option1.text = "Pendente"
        option1.value = 2
        const option2 = document.createElement("option")
        option2.text = "Em progresso"
        option2.value = 3
        const option3 = document.createElement("option")
        option3.text = "Completa"
        option3.value = 1

        statusSelect.appendChild(option1)
        statusSelect.appendChild(option2)
        statusSelect.appendChild(option3)


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
        form.appendChild(statusSelect)
        form.appendChild(submitButton)

        form.onsubmit = (ev) => {
            ev.preventDefault()

            const tarefaToCreate = {
                titulo: tituloInput.value,
                descricao: descricaoInput.value,
                data: dataInput.value,
                statusId: statusSelect.value,
            }

            onSubmitCallback(tarefaToCreate)

        }

        return form
    }

}