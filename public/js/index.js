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

    if (select.options.length > 0) {
        taskApi.getPerson(select.value).then(showPerson);
    }

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
    nome.className = "name";
    nome.innerText = person.firstName + " " + person.lastName

    container.appendChild(nome)

    taskApi.getTarefasByPerson(person.idPerson).
        then(showPersonTasks)

}

/**
 * 
 * @param {Tarefa[]} tarefas
 */
const showPersonTasks = (tarefas) => {
    let notesCount = 0;

    container = document.getElementById("container")

    tarefas.forEach(tarefa => {

        if (notesCount % 6 === 0) {
            const divTarefa = document.createElement("div");
            divTarefa.className = "wrapper";
            container.appendChild(divTarefa);
        }


        const divNote = document.createElement("div")
        divNote.className = "note";

        const divSpiralPart = document.createElement("div")
        divSpiralPart.className = "spiral-part";

        for (let i = 0; i < 10; i++) {
            const divSpiral = document.createElement("div")
            divSpiral.className = "spiral";

            const divHole = document.createElement("div")
            divHole.className = "hole";
            const divWire = document.createElement("div")
            divWire.className = "wire";

            divSpiral.appendChild(divHole);
            divSpiral.appendChild(divWire);
            divSpiralPart.appendChild(divSpiral);
        }
        const divNoteLines = document.createElement("div")
        divNoteLines.className = "note-lines";

        const divLineTitulo = document.createElement("div");
        divLineTitulo.className = "line";
        divLineTitulo.innerText = "Titulo: " + tarefa.titulo;

        const divLineDescricao = document.createElement("div");
        divLineDescricao.className = "line";
        divLineDescricao.innerText = "Descrição: " + tarefa.descricao;

        const divLineData = document.createElement("div");
        divLineData.className = "line";
        divLineData.innerText = "Data: " + tarefa.data;

        const divLineStatus = document.createElement("div");
        divLineStatus.className = "line";
        divLineStatus.innerText = "Status: " + tarefa.status.statusDesc;

        divNoteLines.appendChild(divLineTitulo);
        divNoteLines.appendChild(divLineDescricao);
        divNoteLines.appendChild(divLineData);
        divNoteLines.appendChild(divLineStatus);

        for (let i = 0; i < 8; i++) {
            const divLine = document.createElement("div");
            divLine.className = "line";

            divNoteLines.appendChild(divLine);
        }

        const btnDelete = document.createElement("button")
        btnDelete.innerText = "X"
        btnDelete.onclick = async () => {
            const confirmDelete = window.confirm("Tem certeza que deseja deletar esta tarefa?");

            if (confirmDelete) {
                await taskApi.deleteTarefa(tarefa.id)
                divNote.remove()
            }
        }



        const selectUpdate = document.createElement("select")
        const option0 = document.createElement("option")
        option0.text = "-- Alterar Status --"
        option0.disabled = true
        option0.defaultSelected = true
        const option1 = document.createElement("option")
        option1.text = "Pendente"
        option1.value = 2
        const option2 = document.createElement("option")
        option2.text = "Em progresso"
        option2.value = 3
        const option3 = document.createElement("option")
        option3.text = "Completa"
        option3.value = 1

        selectUpdate.appendChild(option0)
        selectUpdate.appendChild(option1)
        selectUpdate.appendChild(option2)
        selectUpdate.appendChild(option3)

        selectUpdate.onchange = async () => {
            await taskApi.updateTarefa(selectUpdate.value, tarefa.id)
            divLineStatus.innerText = "Status: " + selectUpdate.options[selectUpdate.selectedIndex].text
        }

        const currentRow = container.lastChild;
        divNote.appendChild(divSpiralPart);
        divNote.appendChild(divNoteLines);
        divNote.appendChild(selectUpdate)
        divNote.appendChild(btnDelete)
        currentRow.appendChild(divNote);
        notesCount++;
        container.appendChild(currentRow)
    })
}

const deletePerson = () => {
    const select = document.getElementById("person")

    const confirmDelete = window.confirm("Tem certeza que deseja deletar essa pessoa?");

    if (confirmDelete) {
        const personId = select.value
        taskApi.deletePerson(personId)
            .then(() => {
                const personOption = select.querySelector(`option[value="${personId}"]`);
                if (personOption) {
                    personOption.remove();
                }
            })

        container.innerHTML = "";
        alert("Pessoa deletada com sucesso!");
    }

}