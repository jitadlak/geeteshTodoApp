import React, {useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  View,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-picker/picker';
const TaskScreen = props => {
  const [updateValue, setUpdateValue] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [initialInput, setInitialInput] = useState();
  const [work, setWork] = useState('');
  const [where, setWhere] = useState('');
  const [when, setWhen] = useState('');
  const [number, setnumber] = useState(0);
  const [number1, setnumber1] = useState(0);
  const [number2, setnumber2] = useState(0);
  const [number3, setnumber3] = useState(0);

  const BtnDisbled = () => {
    console.log('updated', selectedLanguage);

    if (work != '' && initialInput != '' && where != '' && when != '') {
      if (selectedLanguage === 'Business') {
        setnumber(number + 1);
        console.log('updated value business', number);
      }
      if (selectedLanguage === 'Personal') {
        setnumber1(number1 + 1);
        console.log('updated value1 personal ', number1);
      }
      if (selectedLanguage === 'Family') {
        setnumber2(number2 + 1);
        console.log('updated value2 family', number2);
      }
      if (selectedLanguage === 'Work') {
        setnumber3(number3 + 1);
        console.log('updated value3 work', number3);
      }
      props.navigation.navigate('Summary', {
       
         Business: number,
        Personal: number1,
        Family: number2,
        Work: number3,
        item: selectedLanguage,
      });
      setWork('');
      setWhere('');
      setWhen('');
    } else {
      Alert.alert('please fill all the inputs');
    }
  };
  const DataUpdate = (itemValue, itemIndex) => {
    setSelectedLanguage(itemValue);
    setUpdateValue(itemValue);
    console.log('select value by user', itemValue);
  };
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>New Task</Text>
        <Text>0 tasks for today</Text>
      </View>
      <View>
        <TouchableHighlight
          style={
            work != '' && initialInput != '' && where != '' && when != ''
              ? styles.circle2
              : styles.circle
          }
          underlayColor="#ccc"
          onPress={() => alert('Yaay!')}>
          {work != '' && initialInput != '' && where != '' && when != '' ? (
            <Entypo
              name="chat"
              size={30}
              color="#F76369"
              style={{alignSelf: 'center'}}
            />
          ) : (
            <Icon
              name="plus"
              size={30}
              color="#848482"
              style={{alignSelf: 'center'}}
            />
          )}
        </TouchableHighlight>
      </View>
      <View>
        <Picker
          label="circle"
          style={styles.input}
          selectedValue={selectedLanguage}
          onValueChange={DataUpdate}>
          <Picker.Item label="Business" value="Business" />
          <Picker.Item label="Personal" value="Personal" />
          <Picker.Item label="Family" value="Family" />
          <Picker.Item label="Work" value="Work" />
        </Picker>
        <TextInput
          placeholder="What I have to do? *"
          style={styles.input}
          value={work}
          onChangeText={item => setWork(item)}
        />
        <TextInput
          placeholder="Where? *"
          style={styles.input}
          value={where}
          onChangeText={item => setWhere(item)}
        />

        <View style={styles.row}>
          <TextInput
            placeholder="When? *"
            style={[styles.input, {width: '50%', marginHorizontal: 36}]}
            value={when}
            onChangeText={item => setWhen(item)}
          />
          <Switch
            trackColor={{false: 'lightgrey', true: '#F76369'}}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text>All day</Text>
        </View>
        <Text style={{marginHorizontal: 38, color: 'grey'}}>
          * Required fields
        </Text>
      </View>

      <TouchableOpacity
        style={
          work != '' && initialInput != '' && where != '' && when != ''
            ? styles.btn2
            : styles.btn
        }
        onPress={BtnDisbled}>
        <Text style={styles.btnText}>ADD TASK</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TaskScreen;
const styles = StyleSheet.create({
  heading: {
    alignItems: 'flex-end',
    marginTop: 33,
    paddingHorizontal: 33,
  },
  headingText: {
    fontSize: 27,
    paddingVertical: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 38,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
    margin: 5,
    backgroundColor: 'lightgrey',
    borderColor: 'lightgrey',
    paddingLeft: 23,
  },
  btn: {
    marginTop: 33,
    alignSelf: 'center',
    width: '80%',
  },
  btn2: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'black',
    backgroundColor: '#F76369',
    marginTop: 33,
    alignSelf: 'center',
    width: '80%',
  },
  btnText: {
    margin: 8,
    color: 'lightgrey',
    alignSelf: 'center',
    padding: 9,
    fontSize: 22,
  },
  circle: {
    alignSelf: 'center',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    backgroundColor: '#Dbd7d2',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
  },
  circle2: {
    alignSelf: 'center',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    backgroundColor: '#Dbd7d2',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#F76369',
    alignItems: 'center',
  },
});
