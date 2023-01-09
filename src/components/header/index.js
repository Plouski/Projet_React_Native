import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Image
      source={{
        uri: 'https://mltic.my/wp-content/uploads/2022/08/1635783444_This-is-MANGA-Plus-an-app-to-read-comics-for-790x527.jpg',
      }}
    />
  );
};

export default Header;

//Utilisation des styled components
const Image = styled.Image`
  height: 100px;
  width: 400px;
`;