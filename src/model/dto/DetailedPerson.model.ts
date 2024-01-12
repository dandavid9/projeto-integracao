import { Person } from "../person.model";
import { DetailedTarefa } from "./DetailedTarefa.model";

export type DetailedPerson = Person & {tarefas : DetailedTarefa[]}