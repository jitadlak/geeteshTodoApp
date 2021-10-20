import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-picker/picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TaskUpdateScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={{flex: 1}}>
      <View style={styles.topHeading}>
        <Text style={{fontSize: 33, color: 'white', fontWeight: 'bold'}}>
          My Tasks
        </Text>
        <View style={styles.rowElement}>
          <View>
            <Icon name="watch-later" size={20} color="white" />
          </View>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={itemValue => setSelectedLanguage(itemValue)}>
              <Picker.Item label="Today" value="java" />
              <Picker.Item label="Yestarday" value="js" />
            </Picker>
          </View>
          <View style={{marginLeft:63,backgroundColor:'#FFFEFF',marginTop:-123,borderRadius:9,padding:8 ,elevation: 5,}}>
            <Text  style={{fontSize:20}}>1 of 1</Text>
          </View>
        </View>
      </View>
      {/* <View style={{alignItems: 'center', marginTop: '30%', flex: 3}}>
         <Entypo name="calendar" size={50} color="lightgray" />
        <Text style={{fontSize: 22, marginTop: 9, color: 'lightgray'}}>
          No Tasks for Today
        </Text>
        </View> */}
      <View style={{alignItems: 'center', flex: 3}}>
        <View style={styles.todoList}>
          <View
            style={[
              styles.circle,
              {justifyContent: 'center', alignItems: 'center'},
            ]}>
            <Entypo name="chat" size={30} color="gray" />
          </View>
          <View style={{padding: 8}}>
            <Text style={{fontSize: 18}}>reactjsexample...</Text>
            <Text style={{color: 'gray', fontSize: 16}}>ny</Text>
          </View>
          <View style={{paddingTop: 12}}>
            <Text style={{color: 'gray', fontSize: 18}}>All</Text>
            <Text style={{color: 'gray', fontSize: 18}}>day</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', marginHorizontal: 13}}>
          <TouchableOpacity>
            <Text style={{borderWidth: 1, marginHorizontal: 3, padding: 6}}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{borderWidth: 1, marginHorizontal: 3, padding: 6}}>
              Done
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{borderWidth: 1, marginHorizontal: 3, padding: 6}}>
              Active
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <AntDesign
            name="check"
            size={25}
            color="gray"
            style={{marginHorizontal: 5}}
          />
          <AntDesign name="delete" size={25} color="gray" />
        </View>
      </View>
    </View>
  );
};

export default TaskUpdateScreen;

const styles = StyleSheet.create({
  dropdown: {
    width: '60%',
  },
  rowElement: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topHeading: {
    flex: 2,
    paddingTop: 43,
    paddingLeft: 33,
    width: '70%',
    backgroundColor: 'red',
    height: '35%',
    borderTopRightRadius: 133,
    borderBottomEndRadius: 153,
    borderBottomLeftRadius: 68,
  },
  todoList: {
    elevation: 5,
    marginVertical: -33,
    flexDirection: 'row',
    width: '80%',
    borderRadius: 10,
    height: 98,
    padding: 13,
    backgroundColor: '#FFFEFF',
  },
  circle: {
    alignSelf: 'center',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: 'lightgrey',
  },
  btnSelected:{
    backgroundColor:'red'
  },
  notSelectede:{
    backgroundColor:'green'
  }
});

