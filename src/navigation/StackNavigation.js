import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Quiz from '../screens/quiz/Quiz';

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <View>
      <Text>HOME</Text>
    </View>
  );
}

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          animation: 'slide_from_right',
        })}
      >
        <Stack.Screen
          options={({ route }) => ({
            headerTitle: 'Encuesta',
          })}
          name='Quiz'
          component={Quiz}
        />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
