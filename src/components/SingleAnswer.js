import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const SingleAnswer = ({ text = '', onPress = () => {}, selected = false }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          styles.answer,
          styles.item,
          { backgroundColor: selected ? '#334f98' : '#2D4258' },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 4,
    margin: 15,
    maxWidth: '90%',
    padding: 20,
    width: '100%',
  },
  answer: {
    backgroundColor: '#2D4258',
    color: '#DDD',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default SingleAnswer;
