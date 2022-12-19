import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <Image
      style={styles.header}
      source={{
        uri: 'https://mltic.my/wp-content/uploads/2022/08/1635783444_This-is-MANGA-Plus-an-app-to-read-comics-for-790x527.jpg',
      }}
    />
  );
};

export default Header;

const styles = StyleSheet.create({
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