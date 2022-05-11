import React, {useLayoutEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Routes from '../appNavigation/Routes';
import CustomButton from '../components/CustomButton';
import styles from '../styles/dashboardStyles';
import constants from '../utils/constants';

export default Dashboard = props => {
  const {navigation} = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerShown: false,
    });
  }, []);

  const generateDogsBtnAction = () => {
    navigation.navigate(Routes.generateDogs_screen);
  };

  const recentGenerateDogsBtnAction = () => {
    navigation.navigate(Routes.recentGeneratedDogs_screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>{constants.title}</Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          title={constants.generateDogs}
          onPress={generateDogsBtnAction}
        />
        <View style={styles.separator} />
        <CustomButton
          title={constants.recentGenerateDogs}
          onPress={recentGenerateDogsBtnAction}
        />
      </View>
    </SafeAreaView>
  );
};
