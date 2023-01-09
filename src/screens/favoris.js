import React, {useState} from 'react';
import {FlatList, Alert} from 'react-native';
import Header from '../components/header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import notifee from '@notifee/react-native';

const Favoris = () => {
  const [data, setData] = useState([]);

  useFocusEffect(() => {
    getData();
  });

  const Clear = async() => {
    try{
      await AsyncStorage.clear();
      //Notification
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });
      await notifee.displayNotification({
        title: 'MangAwesome',
        body: "Vous avez tous supprimé vos mangas préférés ! S'il y a des problèmes il faut recharger votre application :)",
        android: {
          channelId,
          smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
          pressAction: {
            id: 'default',
          },
        },
      });
    }
    catch (error) {
      console.log(error);
      await Alert.alert(
        "Mauvaise nouvelle",
        "Erreur de suppression :(",
        [
          {
            text: "Quitter",
          },
        ],
      );
    }
  }

  const getData = () => {
    try {
      AsyncStorage.getItem('MangaData')
      .then(value => {
        //console.log(value)
        if (value != null) {
          // console.log(value)
          let data = JSON.parse(value);
          setData(data);
        }
      })
    } 
    catch(error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header />
      <H1>Mes mangas préférés</H1>
      <View >
        <Image
          source={{
            uri: 'https://media.gqmagazine.fr/photos/61b08f7d706093c21a5fb515/16:9/w_1280,c_limit/B9723396273Z.1_20200506170704_000+G02FVMCAG.1-0.jpg',
          }}
        />
      </View>
      <View>
        <Button onPress={() => Clear()}>
          <TextButton>Supprimez tous</TextButton>
        </Button>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.mal_id}
        renderItem={({ item }) => {
          console.log(item)
          return (
            <>
              <Separateur/>
              <H2>{item.title ? item.title : 'Pas de titre disponible'}</H2>
              <View>           
                <Image 
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'red',
                  }} 
                  source={{uri: item.images?.jpg?.image_url}}
                />
              </View>
            </>
          )
        }}
      />
    </Container>
  );
}

export default Favoris;

//Utilisation des styled components
const View = styled.View`
  padding: 10px;
  flexDirection: row;
  justify-content: center;
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

const H2 = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;                                       
`;

const Button = styled.TouchableOpacity`
  background-color: red;
  padding: 12px;
  border-radius: 20px;
`;

const TextButton = styled.Text`
  color: white;
`;

const Image = styled.Image`
  height: 100px;
  width: 150px;
`;