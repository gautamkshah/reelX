import { NavigationContainer } from "@react-navigation/native";
import { FC } from "react";
import React from "react";
import MainNavigator from "./MainNavigator";
import { navigationRef } from "../utils/NavigationUtil";

const Navigation: FC = () => {
  return (
      <NavigationContainer ref={navigationRef}>
       <MainNavigator />

      </NavigationContainer>
  )
};
export default Navigation;