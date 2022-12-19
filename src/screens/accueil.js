import React from 'react';
import {Button, Text} from 'react-native';
import styled from 'styled-components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';

const Stack = createNativeStackNavigator();

const Accueil = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header />
      <Titre>Bienvenue dans monde des mangas !</Titre>
      <Image
        source={{
          uri: 'https://media.gqmagazine.fr/photos/61b08f7d706093c21a5fb515/16:9/w_1280,c_limit/B9723396273Z.1_20200506170704_000+G02FVMCAG.1-0.jpg',
        }}
      />
      <Text>Vous allez avoir une liste où il y a plein de mangas</Text>
      <Text>Vous pourrez même prendre des mangas pour les mettre dans la liste des favoris !</Text>
      <Button
        title="Go voir la liste !"
        // onPress={() => Alert.alert('Button with adjusted color pressed')}
        onPress={() => navigation.navigate('Manga')}
      />
      <Button
        title="Go voir mes favoris !"
        // onPress={() => Alert.alert('Button with adjusted color pressed')}
        onPress={() => navigation.navigate('Bibliotheque')}
      /> 
      <Button
        title="Go voir mes favoris !"
        // onPress={() => Alert.alert('Button with adjusted color pressed')}
        onPress={() => navigation.navigate('Login')}
      /> 
    </Container>
  );
}

export default Accueil;

//Utilisation des styled components
// const Button = styled.Button`
//   background-color: red;
// `;

const Titre = styled.Text`
  padding-top: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-top: 0px;
`;
const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  height: 100px;
  width: 150px;
`;