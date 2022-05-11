import React from 'react';
import {StyleSheet,TouchableOpacity,Text,View } from 'react-native';
import Colors from '../colors';


export default CustomButton = (props)=>{
  const {title = '',onPress=()=>{}} = props

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainer}>
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer:{
    paddingHorizontal:20,
    height:35,
    borderRadius:35/2,
    borderColor:'blue',
    borderWidth:1,
    backgroundColor:Colors.blueColor,
    alignItems:'center',
    justifyContent:'center'

  },
  btnText:{
    color:'#FFF',

  }
})