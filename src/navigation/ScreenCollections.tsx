import LoginScreen from "../screens/auth/LoginScreen"
import RegisterScreen from "../screens/auth/RegisterScreen"
import SplashScreen from "../screens/auth/SplashScreen"
import PickReelScreen from "../screens/reels/PickReelScreen"
import BottomTab from "./BottomTab"


export const authStack=[
      {
            name: 'LoginScreen' ,
            component:LoginScreen
      },
      {
            name: 'RegisterScreen',
            component: RegisterScreen
      },
      {
            name: 'SplashScreen',
            component: SplashScreen
      }
]

export const dashboardStack=[
      {
            name: 'BottomTab',
            component: BottomTab
      },
      {
            name: 'PickReelScreen',
            component: PickReelScreen
      }
]

export const mergedStacks = [...dashboardStack, ...authStack]