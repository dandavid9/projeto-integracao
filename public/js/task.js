"use strict"

class TaskApi {

    constructor() {
    }

    /**
  * @returns {Promise<Person[]>}
  */
    async findPerson() {
        return (await fetch(`http://localhost:3000/person`)).json();
    }

    /**
     * 
     * @param {number} id 
     * @returns {Promise<Person>}
     */
    async getPerson(personId) {
        return (await fetch(`http://localhost:3000/person/${personId}`)).json()
    }


    async createPerson(value) {
        const req = fetch(`http://localhost:3000/person`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
        });

        return (await req).json();
    }

    async deletePerson(personId) {
        fetch(`http://localhost:3000/person/${personId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    async getTarefasByPerson(personId) {
        return (await fetch(`http://localhost:3000/person/${personId}/tarefa`)).json()
    }

    async createTarefa(personId, value) {
        const req = fetch(`http://localhost:3000/person/${personId}/tarefa`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
        });

        return (await req).json();
    }

    async updateTarefa(tarefaId, statusId) {
        const req = fetch(`http://localhost:3000/tarefa/${tarefaId}/${statusId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        });

        return (await req).json();
    }

    async deleteTarefa(tarefaId) {
        fetch(`http://localhost:3000/tarefa/${tarefaId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

}