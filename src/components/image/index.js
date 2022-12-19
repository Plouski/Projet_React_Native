import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Image = () => {
    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
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
          {isLoading ? <ActivityIndicator /> : (
            <FlatList
              data={data}
              keyExtractor={item => item.mal_id}
              renderItem={({ item }) => {
                console.log(item)
                return (
                  <>
                      <Image 
                        style={{
                          width: 100,
                          height: 100,
                          backgroundColor: 'red',
                        }} 
                        source={{uri: item.images?.jpg?.image_url}}
                      />
                  </>
                )
              }}
            />
          )}
        </View>
      );
}
export default Header;

const styles = StyleSheet.create({
  header: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});