import React, {useEffect, useState} from 'react';
import { View, Image, StyleSheet, Text, Button, Alert, FlatList} from 'react-native';
import Header from '../components/header';
import Axios from 'axios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();
const Separator = () => (
  <View style={styles.separator} />
);

const Bibliotheque = ({route}) => {
  const [data, setData] = useState([]);
  //const [manga, setManga] = useState({});

  // useEffect(() => {
  //   getData();
  //   console.log()
  // },);
  useEffect(() => {
    Axios.get('https://api.jikan.moe/v4/manga')
      .then((data) => {
        setData(data.data.data)
      })
      .catch((error) => console.error(error))
      .finally((getData) => {
        setData(data.mal_id)
      })
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('MangaData')
      .then(value => {
        //console.log(value)
          if (value != null) {
            console.log(value)
              let data = JSON.parse(value);
              setData(data);
              console.log(data)
          }
      })
    } 
    catch(error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.titre}>Vous pourrez retrouver vos mangas que vous adorerez lire !</Text>
      {/* <Text>Welcome {manga.name} !</Text> */}
      <FlatList
          data={data}
          keyExtractor={item => item.mal_id}
          renderItem={({ item }) => {
            console.log(item)
            return (
              <>
                  <View style={styles.container}>
                  <Text style={styles.titre}>{item.title}</Text>
                  <Image 
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: 'red',
                    }} 
                    source={{uri: item.images?.jpg?.image_url}}
                  />
                  </View>
                  {/* creer un composant ou on envoi les props */}
              </>
            )
          }}
        />
    </View>
  );
}

export default Bibliotheque;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    resizeMode: "cover",
    height: 100,
    width: 400,
  },
  accueil: {
    height: 100,
    width: 150,
  },
  titre:{
    paddingTop: 10,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
  }
});