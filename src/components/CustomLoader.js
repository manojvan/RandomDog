import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import colors from '../colors';

export default CustomLoader = (props) =>{
    return (
        <Spinner
        visible={props.visible}
        color={colors.blueColor}
        overlayColor="rgba(0,0,0,0.8)"
        //textContent='Loading Please Wait...'
        textStyle={{'color':'#fff',fontSize:18}}
      />
    );
}