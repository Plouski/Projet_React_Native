import * as React from 'react';
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accueil from '../screens/accueil';
import Manga from '../screens/liste';
import Details from '../screens/details';
import Favoris from '../screens/favoris';

//Accueil
const AccueilStack = createNativeStackNavigator();
function AccueilStackScreen() {
  return (
    <AccueilStack.Navigator initialRouteName="Accueil">
      <AccueilStack.Screen name="Accueil" component={Accueil} />
      <AccueilStack.Screen name="Manga" component={Manga} />
      <AccueilStack.Screen name="Details" component={Details} />
      <AccueilStack.Screen name="Favoris" component={Favoris} />
    </AccueilStack.Navigator>
  );
}

//Liste
const ListeStack = createNativeStackNavigator();
function ListeStackScreen() {
  return (
    <ListeStack.Navigator>
      <ListeStack.Screen name="Manga" component={Manga} />
      <ListeStack.Screen name="Details" component={Details} />
    </ListeStack.Navigator>
  );
}

//Favoris
const FavoriStack = createNativeStackNavigator();
function FavoriStackScreen() {
  return (
    <FavoriStack.Navigator initialRouteName="Home">
      <FavoriStack.Screen name="Favoris" component={Favoris} />
    </FavoriStack.Navigator>
  );
}

//Navigation Bottom
const Tab = createBottomTabNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>      
        <Tab.Screen name="Accueil" 
          component={AccueilStackScreen}
          options={{
            tabBarIcon:({focused}) => (
              <Icon
                source={require('../../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? 'red' : 'black',
                }}
              />
            ),
          }}
        />
        <Tab.Screen name="Liste" component={ListeStackScreen}
          options={{
            tabBarIcon:({focused}) => (
              <Icon
                source={require('../../assets/icons/liste.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? 'red' : 'black',
                }}
              />
            ),
          }}
        />
        <Tab.Screen name="Favoris" component={FavoriStackScreen} 
          options={{
            tabBarIcon:({focused}) => (
              <Icon
                source={require('../../assets/icons/favori.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? 'red' : 'black',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//Utilisation des styled components
const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;
