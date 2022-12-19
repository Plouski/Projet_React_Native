import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Manga from '../screens/liste';
import Details from '../screens/details';
import Bibliotheque from '../screens/bibliotheque';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Liste"
        component={Manga}
        options={{title: 'ListeManga'}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: 'Details'}}
      />
      <Stack.Screen
        name="Bibliotheque"
        component={Bibliotheque}
        options={{title: 'Bibliotheque'}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;