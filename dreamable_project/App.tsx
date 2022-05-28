import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'
import {Colors} from 'react-native-paper'
import Dreamming from './src/screens/Dreamming'
import BottomBar from './src/screens/BottomBar'
import BottomBar2 from './src/screens/BottomBar2'
import BottomBar3 from './src/screens/BottomBar3'

export default function app(){
  return (
    <SafeAreaView style={styles.flex}>
      <BottomBar3 />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: Colors.lightBlue100}
})