import React from 'react'
import {StyleSheet, View, Text, SafeAreaView} from 'react-native'
import {Colors} from 'react-native-paper'
import HomeIcon from '../assets/HomeIcon'
import TravelIcon from '../assets/DreammingIcon'
import MypageIcon from '../assets/MypageIcon'

const title = 'BottomBar'
export default function BottomBar(){
  return (
    <View style={[styles.view]}>
      <HomeIcon />
      <TravelIcon />
      <MypageIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 5, backgroundColor: Colors.blue900},
  text: {fontSize: 20, color: 'white'}
})
