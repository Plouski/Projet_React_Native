import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert} from 'react-native';
import axios from 'axios';
import Header from '../components/header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Separator = () => (
  <View style={styles.separator} />
);  

const Details = ({route}) => {
  const navigation = useNavigation();

  const setData = async () => {
    try {
      await AsyncStorage.setItem('MangaData', JSON.stringify(manga));
      navigation.navigate('Bibliotheque', {id: manga.mal_id} );
    } 
    catch (error) {
      console.log(error);
    }
  }

  //const [data, setData] = useState([]);
  const [manga, setManga] = React.useState({});

  // Exemple optional Chaining
  // console.log(data);
  // console.log(data.series);
  // console.log(data.series?.available); // si character.series n'existe pas, sa plante, c'est pour ça qu'on utilise le optional chaining
  console.log(route);

  // useEffect(() => {
  //   Axios.get('https://api.jikan.moe/v4/manga${route.params?.mal_id}')
  //     .then((data) => {
  //       setData(data.data.data)
  //     })
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, [route.params?.mal_id]);

  useEffect(() => {
    axios({
      method: 'get',
      //On fetch le héro en utilisant le template string (ES6)
      url: `https://api.jikan.moe/v4/manga/${route.params.id}`,
    })
    .then(response => {
      //Fuck les devs marvels (c pas propre)
      // console.log(response.data);
      setManga(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  },[route.params.mal_id]);

  // il fqut utiliser styled component
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Text style={styles.titre} value={manga.title}>{manga.title}</Text>
        <Separator />
        <Image style={styles.image}
          source={{uri: manga.images?.jpg?.image_url}}
        />
        <Separator />
        <Text>Status : {manga.status}</Text>
        <Separator />
        <Text>{manga.synopsis ? manga.synopsis : 'Pas de description possible :( '}</Text>
        <Separator />
        <Text>Ce manga vous plaît ?</Text>
        <Button
          style={styles.boutton}
          color="red"
          title="Yes go enregistrer !"
          // onPress={() => Alert.alert('Button with adjusted color pressed')}
          // onPress={() => navigation.navigate('Manga')}
          // onPress={addTodo => navigation.navigate('Bibliotheque')}
          // onClick={() => this.handleClick(manga.id)} 
          onPress={() => setData()}
        />
      </View>
    </>
  );
};

export default Details ;

const styles = StyleSheet.create({
  image:{
    width: 100,
          height: 100,
          backgroundColor: 'red',
  },
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
    fontWeight: 'bold',
    paddingTop: 10,
    textAlign: "center",
    fontSize: 18,
    marginTop: 0,
  }
});