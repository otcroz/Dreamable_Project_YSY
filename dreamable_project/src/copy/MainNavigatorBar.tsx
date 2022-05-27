import { BottomNavigation } from "react-native-paper"
import React, {useState} from 'react'


export default function BottomBar2(){
  const [index, setIndex] = useState<number>(0)
  const [routes] = useState([])

  const renderScene = BottomNavigation.SceneMap({})

  return (
    <BottomNavigation 
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

