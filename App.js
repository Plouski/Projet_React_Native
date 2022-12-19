import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Manga from './src/screens/liste';
import Bibliotheque from './src/screens/bibliotheque';
import Details from './src/screens/details';
import Accueil from './src/screens/accueil';
import Login from './src/screens/Signup/signup';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Manga" component={Manga} />
        <Stack.Screen name="Bibliotheque" component={Bibliotheque} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
