import { StyleSheet, Text } from 'react-native';

const SingleQuestion = ({ text = '' }) => {
  return <Text style={[styles.question, styles.item]}>{text}</Text>;
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 4,
    margin: 15,
    maxWidth: '90%',
    padding: 20,
    width: '100%',
  },
  question: {
    backgroundColor: '#DDDDDD',
    fontSize: 25,
  },
});
export default SingleQuestion;
