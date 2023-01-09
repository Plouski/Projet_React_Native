import React from 'react';
import {Image} from 'react-native';

const Image_manga = ({source}) => {
  return (
      <Image 
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
        }} 
        source={{
          uri: source,
        }}
      />
  );
}
export default Image_manga;