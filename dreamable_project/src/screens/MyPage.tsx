import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Colors} from 'react-native-paper'

const title = 'MyPage'
export default function MyPage(){
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
    Colors.green100},
  text: {fontSize: 20, color: 'white'}
})
