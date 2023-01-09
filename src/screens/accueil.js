import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';

const Accueil = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header />
      <H1>MangAwesome</H1>
      <H2>Bienvenue dans le monde des mangas !</H2>
      <View >
        <Image
          source={{
            uri: 'https://media.tenor.com/ceaGYyaCq2gAAAAC/luffy-one.gif',
          }}
        />
      </View>
      <Text_Bold>Vous allez avoir une liste où il y a plein de mangas</Text_Bold>
      <Text>Vous pourrez même mettre vos mangas préférés dans la liste des favoris pour les regarder plus tard !</Text>
      <View/>
      <Between>
        <Button onPress={() => navigation.navigate('Manga')}>
          <TextButton>Voir la liste ! </TextButton>
        </Button>
        <Separateur/> 
        <Button onPress={() => navigation.navigate('Favoris')}>
          <TextButton>Voir mes favoris !</TextButton>
        </Button> 
      </Between>
    </Container>
  );
}

export default Accueil;

//Utilisation des styled components
const View = styled.View`
  padding: 10px;
`;

const Separateur = styled.View`
  padding: 5px;
`;

const H1 = styled.Text`
  color: red;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: 0px;
`;

const H2 = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;                                       
`;

const Text = styled.Text`
  font-size: 14px;                                       
`;

const Text_Bold = styled.Text`
  font-size: 14px;
  font-weight: bold;                                    
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

const Image = styled.Image`
  height: 100px;
  width: 150px;
`;

const Between = styled.View`
  flexDirection: row;
  justifyContent: space-between;
`;

const Button = styled.TouchableOpacity`
  background-color: red;
  padding: 12px;
  border-radius: 20px;
`;

const TextButton = styled.Text`
  color: white;
`;