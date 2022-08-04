export const questions = [
  {
    id: -1,
    question: 'finish',
    answers: [],
  },

  //Sección 1
  {
    id: 1,
    section: '1',
    question:
      'Contestaré esta encuesta respecto a la experiencia de la empresa que represento:',
    answers: [
      {
        id: 1,
        text: 'Acepto',
        nextQuestionId: 2,
      },
      {
        id: 2,
        text: 'No acepto',
        nextQuestionId: -1,
      },
    ],
  },
  {
    id: 2,
    section: '1',
    question: '¿A qué sector se dedica la empresa?',
    answers: [
      {
        id: 1,
        text: 'Agricultura, cría y explotación de animales, aprovechamiento forestal, pesca y caza',
        nextQuestionId: 3,
      },
      {
        id: 2,
        text: 'Minería',
        nextQuestionId: 3,
      },
      {
        id: 3,
        text: 'Generación, transmisión, distribución y comercialización de energía eléctrica, suministro de agua y de gas natural por doctos al consumidor',
        nextQuestionId: 3,
      },
    ],
  },
  {
    id: 3,
    section: '1',
    question: 'Número de empleados',
    answers: [
      {
        id: 1,
        text: '1 a 10',
        nextQuestionId: 4,
      },
      {
        id: 2,
        text: '11 a 50',
        nextQuestionId: 4,
      },
      {
        id: 3,
        text: '51 a 250',
        nextQuestionId: 4,
      },
      {
        id: 4,
        text: '251 o más',
        nextQuestionId: 4,
      },
    ],
  },
  {
    id: 4,
    section: '1',
    question: '¿Este año habrá entrega de reparto de utilidades?',
    answers: [
      {
        id: 1,
        text: 'Sí',
        nextQuestionId: 5,
      },
      {
        id: 2,
        text: 'No',
        nextQuestionId: 4,
      },
    ],
  },
  {
    id: 4,
    section: '1',
    question:
      'En comparación con el año anterior ¿Cómo será el monto repartido de PTU ?',
    answers: [
      {
        id: 1,
        text: 'Mayor',
        nextQuestionId: 6,
      },
      {
        id: 2,
        text: 'Igual',
        nextQuestionId: 4,
      },
      {
        id: 3,
        text: 'Menor',
        nextQuestionId: 4,
      },
    ],
  },

  //Sección 2
  {
    id: 5,
    section: '2',
    question:
      'En comparación con el año anterior ¿Cómo será el monto repartido de PTU ?',
    answers: [
      {
        id: 1,
        text: 'Mayor',
        nextQuestionId: 6,
      },
      {
        id: 2,
        text: 'Igual',
        nextQuestionId: 4,
      },
      {
        id: 3,
        text: 'Menor',
        nextQuestionId: 4,
      },
    ],
  },
  {
    id: 6,
    section: '2',
    question:
      '¿Cuáles fueron las razones por las que el monto de reparto de utilidades fue mayor?',
    answers: [
      {
        id: 1,
        text: 'Mayor',
        nextQuestionId: 6,
      },
      {
        id: 2,
        text: 'Igual',
        nextQuestionId: 4,
      },
      {
        id: 3,
        text: 'Menor',
        nextQuestionId: 4,
      },
    ],
  },
];
