import { BottomNavigation } from "react-native-paper"
import React, {useState} from 'react'
import Home from './Home'
import Dreamming from './Dreamming'
import MyPage from './MyPage'
import HomeIcon from '../assets/home.svg'
import TravelIcon from '../assets/dreamming.svg'
import MypageIcon from '../assets/mypage.svg'


export default function BottomBar2(){
  const [index, setIndex] = useState<number>(0)
  const [routes, setRoutes] = useState([
    {key: 'home', title:"", icon: HomeIcon},
    {key: 'dreamming', title:"", icon: TravelIcon},
    {key: 'mypage', title:"", icon: MypageIcon}
  ])

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    dreamming: Dreamming,
    mypage: MyPage,
  })

  return (
    <BottomNavigation 
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

