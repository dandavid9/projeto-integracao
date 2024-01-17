"use strict"

class Form {

    
    constructor() {
    }

    createPersonForm(onSubmitCallback) {
        const divContainer = document.getElementById("container")
        const form = document.createElement("form")
        form.id = "personForm";

        const h2Person = document.createElement("h2");
        h2Person.innerText = "Adicionar Pessoa";
        h2Person.className = "person";

        const divPersonGroup1 = document.createElement("div")
        divPersonGroup1.className = "form-group";
        const firstNameLabel = document.createElement("label")
        firstNameLabel.innerText = "Primeiro Nome:"
        firstNameLabel.setAttribute("for", "firstName");
        const firstNameInput = document.createElement("input")
        firstNameInput.type = "text";
        firstNameInput.id = "firstName";
        firstNameInput.name = "firstName";
        firstNameInput.required = true
        divPersonGroup1.appendChild(firstNameLabel)
        divPersonGroup1.appendChild(firstNameInput)

        
        const divPersonGroup2 = document.createElement("div")
        divPersonGroup2.className = "form-group";
        const lastNameLabel = document.createElement("label")
        lastNameLabel.innerText = "Último Nome:"
        lastNameLabel.setAttribute("for", "lastName");
        const lastNameInput = document.createElement("input")
        lastNameInput.type = "text";
        lastNameInput.id = "lastName";
        lastNameInput.name = "lastName";
        lastNameInput.required = true

        divPersonGroup2.appendChild(lastNameLabel)
        divPersonGroup2.appendChild(lastNameInput)


        const divPersonGroup3 = document.createElement("div")
        divPersonGroup3.className = "form-group";
        const emailLabel = document.createElement("label")
        emailLabel.innerText = "E-mail:"
        emailLabel.setAttribute("for", "email");
        const emailInput = document.createElement("input")
        emailInput.type = "email";
        emailInput.id = "email";
        emailInput.name = "email";
        emailInput.required = true

        divPersonGroup3.appendChild(emailLabel)
        divPersonGroup3.appendChild(emailInput)

        const divLinks  = document.createElement("div");
        divLinks.className = "baixo";
        const submitButton = document.createElement("button")
        submitButton.type = "submit"
        submitButton.innerText = "Adicionar Pessoa"
        
        const linkPerson = document.createElement("a");
        linkPerson.href = "index.html";
        linkPerson.innerText = "Ver Tarefas";

        divLinks.appendChild(submitButton)
        divLinks.appendChild(linkPerson)

        form.appendChild(h2Person)
        form.appendChild(divPersonGroup1)
        form.appendChild(divPersonGroup2)
        form.appendChild(divPersonGroup3)
        form.appendChild(divLinks)

        divContainer.appendChild(form)

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
        const divContainer = document.getElementById("container");
        
        const form = document.createElement("form");
        form.id = "taskForm";

        const divFormGroup1 = document.createElement("div");
        divFormGroup1.className = "form-group";
        const labelTitulo = document.createElement("label");
        labelTitulo.innerText = "Título:";
        const inputTitulo = document.createElement("input");
        inputTitulo.type = "text";
        inputTitulo.id = "titulo";
        inputTitulo.name = "titulo";
        inputTitulo.required = true;
        divFormGroup1.appendChild(labelTitulo);
        divFormGroup1.appendChild(inputTitulo);

        const divFormGroup2 = document.createElement("div");
        divFormGroup2.className = "form-group";
        const labelDescricao = document.createElement("label");
        labelDescricao.innerText = "Descrição:";
        const textAreaDescricao = document.createElement("textarea");
        textAreaDescricao.id = "descricao";
        textAreaDescricao.name = "descricao";
        textAreaDescricao.rows = "4";
        textAreaDescricao.required = true;
        divFormGroup2.appendChild(labelDescricao);
        divFormGroup2.appendChild(textAreaDescricao);

        const divFormGroup3 = document.createElement("div");
        divFormGroup3.className = "form-group";
        const labelData = document.createElement("label");
        labelData.innerText = "Data:"
        const inputData = document.createElement("input");
        inputData.type = "date"
        inputData.id = "data";
        inputData.name = "data";
        inputData.required = true
        divFormGroup3.appendChild(labelData)
        divFormGroup3.appendChild(inputData)
        
        const divFormGroup4 = document.createElement("div");
        divFormGroup4.className = "form-group";
        const labelStatus = document.createElement("label");
        labelStatus.innerText = "Status:";
        const statusSelect = document.createElement("select");
        statusSelect.id = "status";
        statusSelect.name = "status";
        statusSelect.required = true;
        const option1 = document.createElement("option");
        option1.text = "Pendente";
        option1.value = 2;
        const option2 = document.createElement("option");
        option2.text = "Em progresso";
        option2.value = 3;
        const option3 = document.createElement("option");
        option3.text = "Completa";
        option3.value = 1;

        statusSelect.appendChild(option1);
        statusSelect.appendChild(option2);
        statusSelect.appendChild(option3);

        divFormGroup4.appendChild(labelStatus);
        divFormGroup4.appendChild(statusSelect);

        const divBaixo = document.createElement("div");
        divBaixo.className = "baixo";
        const buttonSubmit = document.createElement("button");
        buttonSubmit.type = "submit";
        buttonSubmit.innerText = "Adicionar Tarefa";
        const linkTarefas = document.createElement("a");
        linkTarefas.href = "index.html";
        linkTarefas.innerText = "Ver Tarefas";

        divBaixo.appendChild(buttonSubmit);
        divBaixo.appendChild(linkTarefas);

        form.appendChild(divFormGroup1);
        form.appendChild(divFormGroup2);
        form.appendChild(divFormGroup3);
        form.appendChild(divFormGroup4);
        form.appendChild(divBaixo);
        /*
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

        */

        form.onsubmit = (ev) => {
            ev.preventDefault()

            const tarefaToCreate = {
                titulo: inputTitulo.value,
                descricao: textAreaDescricao.value,
                data: inputData.value,
                statusId: statusSelect.value,
            }

            onSubmitCallback(tarefaToCreate)

        }

        return form
    }

}