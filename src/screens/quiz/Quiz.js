import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import SingleQuestion from '../../components/SingleQuestion';
import { questions } from '../../utils/questions';
import _ from 'lodash';
import SingleAnswer from '../../components/SingleAnswer';
import {
  initDatabase,
  deleteDatabase,
  getQuestions,
  getPosibleAnswers,
  getQuestion,
} from '../../services/database/database';
import { useEffect, useState } from 'react';
import InputAnswer from '../../components/InputAnswer';

const Quiz = ({ navigation, route }) => {
  const idQuestion = _.get(route, 'params.idQuestion', 1);
  const actualAnswers = _.get(route, 'params.actualAnswers', {});
  const [questionsList, setQuestionsList] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState('');
  const [textInput, setTextInput] = useState('');
  const [multipleAnswers, setMultipleAnswers] = useState({});

  console.log('ROUTE', route.params);
  console.log('QUESTION', question);
  console.log('ANSWER', answers);
  console.log('MULTIPLE ANSWERS', multipleAnswers);

  deleteDatabase();
  initDatabase();

  useEffect(() => {
    console.log('useEFFECT');
    getQuestion({
      id: idQuestion,
    })
      .then((data) => {
        '------------QUESTION-----------';
        setQuestion(data);
      })
      .catch((error) => {
        console.log(error);
      });
    getPosibleAnswers({
      id: idQuestion,
    })
      .then((data) => {
        '------------ANSWERS-----------';
        setAnswers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log('questions', getQuestions());
  // getQuestions()
  //   .then((data) => {
  //     console.log('DATA:', data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // getPosibleAnswers({
  const contentHandler = {
    1: answers.map((answer) => {
      return (
        <SingleAnswer
          key={answer.id}
          text={answer.posible_answer}
          onPress={() => {
            navigation.push('Quiz', {
              idQuestion: answer.id_next,
              actualAnswers: {
                ...actualAnswers,
                [idQuestion]: answer.posible_answer,
              },
            });
          }}
        />
      );
    }),
    2: (
      <>
        {answers.map((answer) => {
          return (
            <>
              <SingleAnswer
                selected={
                  multipleAnswers[answer.id] !== false &&
                  multipleAnswers[answer.id] !== undefined
                }
                key={answer.id}
                text={answer.posible_answer}
                onPress={() => {
                  setMultipleAnswers({
                    ...multipleAnswers,
                    [answer.id]: multipleAnswers[answer.id]
                      ? false
                      : answer.posible_answer,
                  });
                }}
              />
            </>
          );
        })}

        <Button
          title='Siguiente'
          onPress={() => {
            navigation.push('Quiz', {
              idQuestion: idQuestion + 1,
              actualAnswers: {
                ...actualAnswers,
                [idQuestion]: multipleAnswers,
              },
            });
          }}
        ></Button>
      </>
    ),
    3: (
      <InputAnswer
        onChange={(text) => {
          setTextInput(text);
        }}
        value={textInput}
        onPress={() => {
          navigation.push('Quiz', {
            idQuestion: _.get(question, '[0].id') + 1,
            actualAnswers: {
              ...actualAnswers,
              [idQuestion]: textInput,
            },
          });
        }}
      />
    ),
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {idQuestion == -1 ? (
          <View style={{}}>
            <Text>FINALIZADO</Text>
            <Text>{JSON.stringify(actualAnswers)}</Text>
          </View>
        ) : (
          <>
            <SingleQuestion text={_.get(question, '[0].question', '')} />
            {contentHandler[_.get(question, '[0].type]', 1)]}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Quiz;
