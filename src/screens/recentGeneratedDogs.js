import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  FlatList,
  Text,
} from 'react-native';

import FastImage from 'react-native-fast-image';
import colors from '../colors';

import CustomButton from '../components/CustomButton';
import constants from '../utils/constants';
import {clearRecords, getDogs} from '../utils/dataBase';

export default RecentGeneratedDogs = props => {
  const {navigation} = props;
  const [dogsArr, setDogsArr] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Recently Generated Dogs!',
      headerShown: true,
    });
  }, []);

  useEffect(() => {
    async function getStoredDogs() {
      let res = await getDogs();
      if (res.length > 0) {
        console.log(res.length, 'dogs saved======');
        setDogsArr(res.reverse());
      }
    }
    getStoredDogs();
  }, []);

  const clearBtnAction = async () => {
    await clearRecords();
    setDogsArr([]);
  };

  const renderDogItem = ({item, index}) => {
    return (
      // <Text>{item}</Text>
      <View>
        <FastImage
          style={styles.img}
          source={{
            uri: encodeURI(item),
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {dogsArr.length > 0 ? (
        <>
          <View style={styles.listView}>
            <FlatList
              data={dogsArr}
              extraData={dogsArr}
              horizontal
              renderItem={renderDogItem}
            />
          </View>

          <View style={styles.btnContainer}>
            <CustomButton
              title={constants.clearDogs}
              onPress={clearBtnAction}
            />
          </View>
        </>
      ) : (
        <View style={styles.infoView}>
          <Text style={styles.infoText}>Please generate dogs</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  listView: {
    height: 300,
    marginTop: 50,
  },
  img: {
    height: 300,
    width: Dimensions.get('window').width * 0.8,
    marginRight: 20,
  },
  infoView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.blueColor,
  },
});
