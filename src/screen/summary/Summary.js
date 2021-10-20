import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Summary = props => {
  console.log(props.route.params);
  console.log(props.route.params.item);
  console.log('business', props.route.params.Business);
  console.log('personal', props.route.params.Personal);
  console.log('family', props.route.params.Family);
  console.log('work', props.route.params.Work);

  const [Business, setBusiness] = useState(props.route.params.Business);
  const [Personal, setPersonal] = useState(props.route.params.Personal);
  const [Family, setFamily] = useState(props.route.params.Family);
  const [Work, setWork] = useState(props.route.params.Work);

  

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0}}
      colors={['#880e4f', '#512da8']}
      style={styles.linearGradient}
      style={styles.container}>
      <Text style={{color: 'white', alignSelf: 'center', fontSize: 30}}>
        Summary
      </Text>

      <View style={styles.box}>
        <View style={styles.row}>
          <Text style={{color: 'white'}}>All things</Text>
          <Text></Text>
          <Text style={{color: 'white'}}>0</Text>
        </View>
        <View style={styles.row}>
          <Text style={{color: 'white'}}>Business</Text>
          <Text style={styles.CircleShape}>.</Text>
          <Text style={{color: 'white'}}>{Business}</Text>
        </View>
        <View style={styles.row}>
          <Text style={{color: 'white'}}>Personal</Text>
          <Text style={styles.CircleShape}>.</Text>
          <Text style={{color: 'white'}}>{Personal}</Text>
        </View>
        <View style={styles.row}>
          <Text style={{color: 'white'}}>Family</Text>
          <Text style={styles.CircleShape}>.</Text>
          <Text style={{color: 'white'}}>{Family}</Text>
        </View>
        <View style={styles.row}>
          <Text style={{color: 'white'}}>Work</Text>
          <Text style={styles.CircleShape}>.</Text>
          <Text style={{color: 'white'}}>{Work}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate('TaskUpdateScreen')}>
        <Text style={styles.btnText}>VIEW TASKS</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default Summary;

const styles = StyleSheet.create({
  box: {},
  row: {
    flexDirection: 'row',

    justifyContent: 'space-around',
  },
  btn: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'white',
    backgroundColor: '#880e4f',
    marginTop: 33,
    alignSelf: 'center',
  },
  btnText: {
    margin: 8,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  CircleShape: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#FF9800',
  },
});
