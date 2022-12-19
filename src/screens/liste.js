import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';

const Separator = () => (
  <View style={styles.separator} />
);

const Manga = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    Axios.get('https://api.jikan.moe/v4/manga')
      .then((data) => {
        setData(data.data.data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <Header />
      <Text style={styles.titre}>Tous les mangas :</Text>
      <Separator />
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={item => item.mal_id}
          renderItem={({ item }) => {
            console.log(item)
            return (
              <>
                <TouchableOpacity
                  onPress={() => {
                  //On fait passer en params de la route l'id de l'item (props)
                  navigation.navigate('Details', {id: item.mal_id});
                  }}>
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
                </TouchableOpacity>
              </>
            )
          }}
        />
      )}
    </View>
  );
};

export default Manga;

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
    fontWeight: 'bold',
    paddingTop: 10,
    textAlign: "center",
    fontSize: 18,
    marginTop: 0,
  }
});