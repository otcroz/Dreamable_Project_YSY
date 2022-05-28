
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import type { RouteProp, ParamListBase } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import Dreamming from './Dreamming'
import MyPage from './MyPage'
import SvgIcon from '../components/SvgIcon';


type TabBarIconProps = {focused: boolean}

const icons: Record<string, any[]> = {
  Home: ['selhome', 'home'],
  MyPage: ['selmypage', 'mypage'],
  Dreamming:['seldreamming', 'dreamming'],
}

const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => {
  return {
    headshown: false,
    tabBarIcon: ({focused}: TabBarIconProps) => {
      const{name} = route 
      const [icon, selectIcon] = icons[name]
      const iconName = focused ? icon : selectIcon
      return <SvgIcon name={iconName}  />
    }
  }
}

const Tab = createBottomTabNavigator()

export default function BottomBar3(){
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name ="Home" component={Home} options={{tabBarLabel: ''}} />
        <Tab.Screen name ="Dreamming" component={Dreamming} options={{tabBarLabel: ''}} />
        <Tab.Screen name ="MyPage" component={MyPage} options={{tabBarLabel: ''}} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}

