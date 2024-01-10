CREATE TABLE IF NOT EXISTS tarefa (
    id_tarefa INTEGER PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao VARCHAR(255),
    data_tarefa DATE NOT NULL,
    status_id INTEGER,
    person_id INTEGER,
    FOREIGN KEY (person_id) REFERENCES pessoas(id),
    FOREIGN KEY (status_id) REFERENCES 'status'(id_status)

);