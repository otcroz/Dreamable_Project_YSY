import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Colors} from 'react-native-paper'

const title = 'Home'
export default function Home(){
  return (
    <View style={[styles.view]}>
      <Text style = {[styles.text]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 5, 
    backgroundColor: 
    Colors.blue100},
  text: {fontSize: 20, color: 'white'}
})
