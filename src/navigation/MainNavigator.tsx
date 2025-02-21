import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { mergedStacks } from './ScreenCollections'

const Stack=createNativeStackNavigator()

const MainNavigator :FC= () => {
  return (
    <Stack.Navigator 
    screenOptions={()=>({
      headerShown:false
    })}
    >
      {
            // add all the screens from the ScreenCollections file
            mergedStacks.map((item,index)=>{
                  return (
                        <Stack.Screen
                        key={index}
                        name={item.name}
                        component={item.component}
                        />
                  )
            })
      }
    </Stack.Navigator>
  )
}

export default MainNavigator

