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
let tarefaForm;
const updateFormWithPerson = (person) => {
    // Se o formulário ainda não foi criado, crie-o
    if (!tarefaForm) {
        tarefaForm = formManager.createTarefaForm((tarefaToCreate) => {
            taskApi.createTarefa(person.idPerson, tarefaToCreate);
            tarefaForm.reset();
        });
        // Adicione o formulário ao DOM ou aonde for necessário
        const container = document.getElementById("container");
        container.appendChild(tarefaForm);
    }
};

const initialSelectedPersonId = "1";
taskApi.getPerson(initialSelectedPersonId).then((initialPerson) => {
    updateFormWithPerson(initialPerson);
});
const onPersonChange = () => {
    const select = document.getElementById("person");
    const selectedPersonId = select.value;

    // Obtenha os detalhes da pessoa com base no ID selecionado
    taskApi.getPerson(selectedPersonId).then((person) => {
        // Atualize o formulário com base na pessoa selecionada
        updateFormWithPerson(person);
    });

}

/**
 * 
 * @param {Person} person
 */
const showForm = (person) => {
    const tarefaForm = formManager.createTarefaForm((tarefaToCreate) => {
        taskApi.createTarefa(person.idPerson, tarefaToCreate);
        tarefaForm.reset();
    });
}
