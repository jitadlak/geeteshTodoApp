import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Btn = props => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
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
});
