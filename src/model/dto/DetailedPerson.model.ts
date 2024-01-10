import { Tarefa } from "../Tarefa.model";
import { Person } from "../person.model";

export type DetailedPerson = Person & {tarefas : Tarefa[]}