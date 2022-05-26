import React from 'react'
import {StyleSheet, View, Text, SafeAreaView} from 'react-native'
import {Colors} from 'react-native-paper'
import HomeIcon from '../../assets/Home'
import TravelIcon from '../../assets/Dreamming'
import MypageIcon from '../../assets/Mypage'

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
