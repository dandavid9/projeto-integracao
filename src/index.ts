import database from "./persistence/database.js";
import express from "express";
import { PersonRepository } from "./repository/person.repository.js";
import { PersonController } from "./controllers/person.controller.js";
import { TarefaRepository } from "./repository/tarefa.repository.js";
import { TarefaController } from "./controllers/tarefa.controller.js";
import { StatusRepository } from "./repository/status.repository.js";
import { StatusController } from "./controllers/status.controller.js";

console.log("💾 Connecting to database");
const db = await database.connectDatabase()

console.log("🏃 Executing migrations");
await database.migrate(db)

console.log("📚 Initializing repositories")
const personRepository = new PersonRepository(db)
const tarefaRepository = new TarefaRepository(db)
const statusRepository = new StatusRepository(db)

console.log("🚪 Initializing controllers")
const personController = new PersonController(
    personRepository,
    tarefaRepository,
    statusRepository
)
const tarefaController = new TarefaController(tarefaRepository)
const statusController = new StatusController(statusRepository)


console.log("🔨 Configuring express")
const api: express.Express = express();
const port: number = 3000;
api.use(express.json());

console.log("🧭 Registering routes")
api.get("/person", personController.findPersons())
api.post("/person", personController.addPerson())
api.delete("/person/:personId", personController.deletePerson())
//api.get("/tarefa", tarefaController.findTarefas())
api.post("/tarefa/:personId", tarefaController.addTarefa())
api.delete("/tarefa/:tarefaId", tarefaController.deleteTarefa())
//api.get("/status", statusController.findStatus())
api.post("/status", statusController.addStatus())
api.delete("/status/:personId", statusController.deleteStatus())

console.log("✈️ Starting express");
api.listen(port, () => {
    console.log("💡 Express JS listening on: " + port)
})