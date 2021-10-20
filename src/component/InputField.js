import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const InputField = (props) => {
    return (
        <View>
            <TextInput placeholder={props.placeholder} style={styles.input}/>
        </View>
    )
}

export default InputField

const styles = StyleSheet.create({
   input :{
       borderWidth:1,
       borderRadius:5,
       width:'80%',
       alignSelf:'center',
       margin:5,
       backgroundColor:'lightgrey',
       borderColor:'lightgrey'
       
   }
})
