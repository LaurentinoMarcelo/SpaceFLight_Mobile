import React, { useEffect, useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

import { Dashborad } from "../screens/Dashborad";
import { ArticlePage } from "../screens/ArticlePage";
import { DetailsArticles } from "../screens/DetailsArticles";

export function StackRoutes() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Dashboard"
        >
            <Screen name="Dashboard" component={Dashborad} />
            <Screen name="ArticlePage" component={ArticlePage} />
            <Screen name="DetailsArticles" component={DetailsArticles} />
        </Navigator>
    );
}