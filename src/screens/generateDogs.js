import React, {useLayoutEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Dimensions, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomLoader from '../components/CustomLoader';
import {API} from '../network/API';
import constants from '../utils/constants';
import FastImage from 'react-native-fast-image';
import {saveDog} from '../utils/dataBase';

export default GenerateDogs = props => {
  const {navigation} = props;
  const [showSpinner, setSpinner] = useState(false);
  const [randDogImg, setDogImg] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Generate Dogs!',
      headerShown: true,
    });
  }, []);

  const generateBtnAction = async () => {
    try {
      setSpinner(true);
      let res = await API.getRandomImages();
      if (res?.statusCode == 200) {
        let randImg = res?.response?.message ?? '';
        saveDog(randImg);
        setDogImg(randImg);
      }
      setSpinner(false);
    } catch (err) {
      setSpinner(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomLoader visible={showSpinner} />
      <View style={styles.imgContainer}>
        <FastImage
          style={styles.img}
          source={{
            uri: encodeURI(randDogImg),
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>

      <View style={styles.btnContainer}>
        <CustomButton title={constants.generate} onPress={generateBtnAction} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  img: {
    height: 200,
    width: '80%',
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
