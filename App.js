import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const App = () => {
    const toggle = false; //false

    //if toogle = return light

    retorn (
    <View style={toggle ? style.containerlight : style.container}>
      <TouchableOpacity onPress={() => {}} >
      <image 
        style={toggle ? style.lighintOn : style.lighingOff}
        sourge={
          toggle
           ? require('./assets/icons/eco-light.png')
           : require('./assets/icons/eco-light-off.png')
        }
      />
       
      <image 
        style={style.diologo}
        sourge={
          toggle
           ? require('./assets/icons/logo-dio-.png')
           : require('./assets/icons/logo-dio-white.png')
        }
        />
        </TouchableOpacity>
     </View>
   );
}

export default App;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black',
        alignItens: 'center',
        justifyContent: 'center',
    }, 
    containerlight: {
        flex: 1, 
        backgroundColor:'white',
        alignItens: 'center',
        justifyContent: 'center',
    },
    lightingOn: {
        resizeMode: 'contain',
        alignSel: 'center',
        width: 150,
        height: 150,
    },
    lightingOn: {
        resizeMode: 'contain',
        alignSelf:'center',
        tintColor: 'white',
        width: 150,
        height: 150,
    },
    lightingOn: {
        resizeMode: 'contain',
        alignSel: 'center',
        width: 250,
        height: 250,
    },
});