import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/homeScreen/HomeScreen';
import Summary from '../screen/summary/Summary';
import TaskScreen from '../screen/taskScreen/TaskScreen';
import TaskUpdateScreen from '../screen/taskUpdateScreen/TaskUpdateScreen';
const Stack = createStackNavigator();

const Index = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Summary" component={Summary}/>
        <Stack.Screen name="TaskScreen" component={TaskScreen}/>
        <Stack.Screen name="TaskUpdateScreen" component={TaskUpdateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
