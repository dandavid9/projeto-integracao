import { Tarefa } from "../Tarefa.model";
import { Status } from "../status.model";

export type DetailedTarefa = Tarefa & {status : Status}