import { TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';

const InputAnswer = ({
  onChange = () => {},
  value = '',
  onPress = () => {},
}) => {
  return (
    <>
      <TextInput
        style={{
          borderColor: '#2D4258',
          borderWidth: 5,
          marginHorizontal: 10,
          padding: 10,
          borderRadius: 10,
        }}
        onChangeText={onChange}
        value={value}
      ></TextInput>

      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.answer, styles.item]}>Siguiente</Text>
      </TouchableOpacity>
    </>
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

export default InputAnswer;
