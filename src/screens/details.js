import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import Header from '../components/header';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';

//On recupere la props route à laquelle on a passé l'id d'un manga
const Details = ({route}) => {
  const [manga, setManga] = useState([]);

  //Exemple optional Chaining
  console.log(manga);
  console.log(manga.series);
  console.log(manga.series?.available); // si character.series n'existe pas, sa plante, c'est pour ça qu'on utilise le optional chaining
  console.log(route.params.id);

  //Obtenir les données pour enregistrer dans la mémoire
  const setData = async () => {
    try {
      //await AsyncStorage.clear()
      const localManga = await AsyncStorage.getItem('MangaData') ? JSON.parse(await AsyncStorage.getItem('MangaData')) : []
      localManga.push(manga);
      console.log("Mangaz",localManga);
      await AsyncStorage.setItem('MangaData', JSON.stringify(localManga));
      //Alerte
      await Alert.alert(
        "Bonne nouvelle",
        "Vous avez bien enregistré ce manga !",
        [
          {
            text: "Quitter",
          },
        ],
      );
    } 
    catch (error) {
      console.log(error);
      await Alert.alert(
        "Mauvaise nouvelle",
        "Erreur d'enregistrement :(",
        [
          {
            text: "Quitter",
          },
        ],
      );
    }
  }

  //Récupérer l'id du manga et aussi afficher des données
  useEffect(() => {
    axios({
      method: 'get',
      //On fetch le héro en utilisant le template string (ES6)
      url: `https://api.jikan.moe/v4/manga/${route.params?.id}`,
    })
    .then(response => {
      setManga(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [route.params?.id]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Header />
          <H1>{manga.title ? manga.title : 'Pas de manga disponible :('}</H1>
          <Image 
            source={{uri: manga.images?.jpg?.image_url}}
          />
          <Separateur/>
          <Text>Status : <Status>{manga.status ? manga.status : 'Pas de status disponible'}</Status></Text>
          <Text>{manga.synopsis ? manga.synopsis : 'Pas de description disponible'}</Text>
          <View>
            <Text>Ce manga vous plaît ?</Text>
            <Separateur/>
            <Button onPress={() => setData()}>
              <TextButton>Yes go enregistrer !</TextButton>
            </Button>
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

//Utilisation des styled components
const View = styled.View`
  padding: 10px;
`;

const Separateur = styled.View`
  padding: 5px;
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
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

const Image = styled.Image`
  height: 120px;
  width: 120px;
`;

const Status = styled.Text`
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  background-color: red;
  padding: 12px;
  border-radius: 20px;
`;

const TextButton = styled.Text`
  color: white;
`;