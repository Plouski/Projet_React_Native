import * as React from 'react';
//import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DisplayAnImage from './component/accueil';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bibliotheque from './component/bibliotheque';
//import Characters from './component/liste';
import Manga from './component/liste';
import Details from './component/details';
const Stack = createNativeStackNavigator();

function Accueil() {
  return (
    <DisplayAnImage/>
  );
}

function ListeScreen() {
  return (
    <Manga />
  );
}

function BibliothequeScreen() {
  return (
    <Bibliotheque />
  );
}

// function DetailsScreen() {
//   return (
   
//   );
// }

const Tab = createBottomTabNavigator();

// function FirstComponent() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Accueil"
//     >
//       <Tab.Screen
//         name="Accueil"
//         component={AccueilScreen}
//       />
//       <Tab.Screen
//         name="Liste"
//         component={ListeScreen}
//       />
//       <Tab.Screen
//         name="Bibliotheque"
//         component={BibliothequeScreen}
//       />
//       <Tab.Screen
//         name="Details"
//         component={DetailsScreen}
//       />
//     </Tab.Navigator>
//   );
// }

function SecondComponent() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={DisplayAnImage} />
        <Stack.Screen name="Liste" component={Manga} />
        <Stack.Screen name="Bibliotheque" component={Bibliotheque} />
        <Stack.Screen name="Details" component={ Details } />
      </Stack.Navigator>
  );
}

export default function Home() {
  return (
    <NavigationContainer independent={true}>
      {/* <FirstComponent /> */}
      <SecondComponent />
    </NavigationContainer>
  );
}
