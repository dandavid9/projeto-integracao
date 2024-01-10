// import database from "./persistence/database.js";
// import express from "express";
// import { PersonRepository } from "./repository/person.repository.js";
// import { PersonController } from "./controller/person.controller.js";
// import { ContactRepository } from "./repository/contact.repository.js";

// console.log("💾 Connecting to database");
// const db = await database.connectDatabase()

// console.log("🏃 Executing migrations");
// await database.migrate(db)

// console.log("📚 Initializing repositories")
// const personRepository = new PersonRepository(db)
// const contactRepository = new ContactRepository(db)

// console.log("🚪 Initializing controllers")
// const personController = new PersonController(
//     personRepository,
//     contactRepository
// )

// console.log("🔨 Configuring express")
// const api: express.Express = express();
// const port: number = 3000;
// api.use(express.json());

// console.log("🧭 Registering routes")
// api.get("/person", personController.findPersons())
// api.post("/person", personController.addPerson())
// api.delete("/person/:personId", personController.deletePerson())

// console.log("✈️ Starting express");
// api.listen(port, () => {
//     console.log("💡 Express JS listening on: " + port)
// })