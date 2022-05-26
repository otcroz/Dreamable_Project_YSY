import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'
import {Colors} from 'react-native-paper'
import Content from './src/screens/Content'
import BottomBar from './src/screens/BottomBar'


export default function app(){
  return (
    <SafeAreaView style={styles.flex}>
      <Content />
      <BottomBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: Colors.lightBlue100}
})