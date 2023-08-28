import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Books from '../components/Books/Books';
import ViewBook from '../components/Books/ViewBook';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="ViewBook" component={ViewBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
