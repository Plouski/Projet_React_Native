import React, { useEffect, useState } from 'react';
import {TouchableOpacity } from 'react-native';

const [saveData, setSaveData] = useState([]);

const _submit = async (text, photo) => {
  let newItem;
  
  newItem = {
    description: text,
    imageURL: photo,
  };
  setSaveData(prevList => {
    prevList = prevList || [];
    if (prevList.length < 0) {
      return newItem;
    } else {
      return [...prevList, newItem];
    }
  });
  setLocalItem();
};

const setLocalItem = async () => {
  AsyncStorage.setItem('test2', JSON.stringify(saveData))
    .then(json => console.log('success!'))
    .catch(error => console.log('error!'));
};

const getLocalItem = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('test2');
    const list = JSON.parse(jsonValue);

    console.log('list: ', list);
  } catch (e) {
    console.log('error: ', e);
  }
};

const Test = () => {
  return (
    <>
<TouchableOpacity
  onPress={() => {
    _submit (text, photo);
  }}>
  <Text>save</Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => {
    getLocalItem();
  }}>
  <Text>get item</Text>
</TouchableOpacity>
</>
  )
}
export default Test;