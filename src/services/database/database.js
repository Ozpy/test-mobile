import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('test');

export function initDatabase() {
  db.transaction((tx) => {
    tx.executeSql(
      //type 1: one choice, 2: multiple choice, 3: open question
      `CREATE TABLE questions (id INTEGER PRIMARY KEY,type int, question TEXT, section TEXT);`,
    );
  });

  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE posible_answers ( id INTEGER PRIMARY KEY AUTOINCREMENT, id_question INT, id_next INT, posible_answer TEXT, FOREIGN KEY(id_question) REFERENCES questions(id))`,
    );
  });

  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE record ( id INTEGER PRIMARY KEY AUTOINCREMENT, id_posible_answer INT, answer_text TEXT, FOREIGN KEY(id_posible_answer) REFERENCES posible_answers(id));`,
    );
  });

  db.transaction((tx) => {
    tx.executeSql(
      `
        INSERT INTO
  questions (id,type, section, question)
VALUES
  (
    1,
    1,
    '1',
    '1. Contestaré esta encuesta respecto a la experiencia de la empresa que represento:'
  ),
  (
    2,
    1,
    '1',
    '2. ¿A qué sector se dedica la empresa?:'
  ),
  (3, 
    1,
    '1', '3. Número de empleados:'),
  (
    4,
    1,
    '1',
    '4. ¿Este año habrá entrega de reparto de utilidades?'
  ),
  (
    5,
    1,
    '2',
    '5. En comparación con el año anterior ¿Cómo será el monto repartido de PTU?'
  ),
  (
    6,
    2,
    '2',
    '5.1 ¿Cuáles fueron las razones por las que el monto de reparto de utilidades fue mayor?'
  ),
  (
    7,
    2,
    '2',
    '5.2 ¿Cuáles fueron las razones por las que habrá menor reparto de utilidades?'
  ),
  (
    8,
    3,
    '2',
    'Días de salario estimado a pagar por PTU ejercicio 2021'
  ),
  (
    9,
    2,
    '3',
    '¿Cuáles fueron las razones por las que no hubo reparto de utilidades? (Selección múltiple)'
  ),
  (
    10,
    1,
    '3',
    'El año anterior, ¿hubo reparto de PTU?'
  );
        `,
    );
  });

  db.transaction((tx) => {
    tx.executeSql(
      `
      INSERT INTO
  posible_answers (id_question, id_next, posible_answer)
VALUES
  (1, 2, 'Acepto'),
  (1, -1, 'No acepto'),
  (
    2,
    3,
    "Agricultura, cría y explotación de animales, aprovechamiento forestal pesca y caza"
  ),
  (2, 3, "b. Minería"),
  (
    2,
    3,
    "c. Generación, transmisión, distribución y comercialización de energía eléctrica, suministro de agua y de gas natural por ductos al consumidor final"
  ),
  (3, 4, '1 a 10'),
  (3, 4, '11 a 50'),
  (3, 4, '51 a 250'),
  (3, 4, '251 o más'),
  (4, 5, 'Si'),
  (4, 8, 'No'),
  (5, 6, 'Mayor'),
  (5, 8, 'Igual'),
  (5, 7, 'Menor'),
  (6, 8, 'Aumento en la productividad de las y los colaboradores'),
  (6, 8, 'Aumento de ventas'),
  (6, 8, 'Entorno económico favorable'),
  (6, 8, 'Nuevas oportunidades de negocio'),
  (7, 8, 'Disminución en la productividad de las y los colaboradores'),
  (7, 8, 'Afectaciones por inseguridad'),
  (7, 8, 'Afectaciones por el entorno político y económico'),
  (8, 9, 'Pregunta abierta'),
  (9, 10, 'Disminución en la productividad de las y los colaboradores'),
  (9, 10, 'Afectaciones por inseguridad'),
  (9, 10, 'Afectaciones por el entorno político y económico'),
  (10, -1, 'Sí'),
  (10, -1, 'No');
        `,
    );
  });
  //   //Print all questions
  //   db.transaction((tx) => {
  //     console.log('---------QUESTIONS------------');
  //     tx.executeSql(`select * from questions`, [], (_, { rows: { _array } }) => {
  //       console.log(_array);
  //     });
  //     console.log('data2');
  //   });

  //   //Print all Answers
  //   db.transaction((tx) => {
  //     console.log('---------ANSWERS------------');
  //     tx.executeSql(
  //       `select * from posible_answers`,
  //       [],
  //       (_, { rows: { _array } }) => {
  //         console.log(_array);
  //       },
  //     );
  //     console.log('data2');
  //   });
}

// export function getQuestions() {
//   db.transaction((tx) => {
//     tx.executeSql(`select * from questions`, [], (_, { rows: { _array } }) => {
//       return _array;
//     });
//     console.log('data2');
//   });
// }
export function recordAnswer({ idQuestion, answer }) {
  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO record (id_posible_answer, answer_text) VALUES (${idQuestion}, '${answer}')`,
      [],
      (_, { rows: { _array } }) => {
        resolve(_array);
      },
    );
  });
}
export function getQuestions() {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from questions`,
        [],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
      );
    });
  });
}

export function getQuestion({ id }) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from questions where id= ${id}`,
        [],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
      );
    });
  });
}
export function getPosibleAnswers({ id: idQuestion }) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from posible_answers where id_question = ${idQuestion}`,
        [],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
      );
    });
  });
}
export function deleteDatabase() {
  console.log('------------DELETE DATABASE------------');
  db.transaction((tx) => {
    tx.executeSql(`DROP table questions`);
  });
  db.transaction((tx) => {
    tx.executeSql(`DROP table posible_answers`);
  });
}
