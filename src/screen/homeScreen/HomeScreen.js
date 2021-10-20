import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({navigation}) => {
  return (
    <LinearGradient start={{x: 0.2, y: 0}} end={{x: 0.92, y: 0}} colors={['#880e4f','#3f51b5','#512da8',]} style={styles.linearGradient}>
      <Text style={styles.heading}>Hi!</Text>
      <Text style={styles.paragraph}>Nothing to do yet? Think about it</Text>
      <Text style={styles.paragraph}>and let's start!</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('TaskScreen') }>
        <Text style={styles.btnText}>ADD TASK</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  heading: {
    color: 'white',
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 33,
  },
  paragraph: {
    color: 'white',
    marginBottom: 3,
    fontSize:19
  },
  btn: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'white',
    backgroundColor: 'grey',
    marginTop: 33,
  },
  btnText: {
    margin: 8,
    color: 'white',
    fontWeight: 'bold',
  },
  linearGradient: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    
   
  },
});
