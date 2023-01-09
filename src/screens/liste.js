import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ActivityIndicator, FlatList, TouchableOpacity, Image} from 'react-native';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';

const Manga = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  //Recuperer les données de API
  useEffect(() => {
    Axios.get('https://api.jikan.moe/v4/manga')
      .then((data) => {
        setData(data.data.data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      <Header />
      <H1>Tous les mangas</H1>
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
                    <H2>{item.title}</H2>
                    <View>
                      <Image 
                        style={{
                          resizeMode: "cover",
                          width: 350,
                          height: 100,
                          backgroundColor: 'red',            
                        }} 
                        source={{uri: item.images?.jpg?.image_url}}
                      />
                    </View>
                    <Separateur/>
                </TouchableOpacity>
              </>
            )
          }}
        />
      )}
    </Container>
  );
};

export default Manga;

//Utilisation des styled components
const View = styled.View`
  flexDirection: row;
  justify-content: center;
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
`;

const H2 = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;                                       
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
`;