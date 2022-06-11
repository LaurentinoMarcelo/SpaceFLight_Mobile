import React, { useEffect, useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

import { UltimasNoticias } from "../screens/UltimasNoticias";
import { ArticlePage } from "../screens/ArticlePage";
import { DetailsArticles } from "../screens/DetailsArticles";
import { Dashboard } from "../screens/Dashboard";
import { FoguetesSpaceX } from "../screens/SpaceX/FoguetesSpaceX";
import { PlataformasSpaceX } from "../screens/SpaceX/PlataformasSpaceX";
import { BarcosSpaceX } from "../screens/SpaceX/BarcosSpaceX";
import { NoticiasSpaceX } from "../screens/SpaceX/NoticiasSpaceX";
import { ArticlePageSpaceX } from "../screens/ArticlePageSpaceX";
import { DetailsPlanets } from "../screens/DetailsPlanets";

export function StackRoutes() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Dashboard"
        >
            <Screen name="Dashboard" component={Dashboard} />
            <Screen name="UltimasNoticias" component={UltimasNoticias} />
            <Screen name="ArticlePage" component={ArticlePage} />
            <Screen name="DetailsArticles" component={DetailsArticles} />

            <Screen name="FoguetesSpaceX" component={FoguetesSpaceX} />
            <Screen name="PlataformasSpaceX" component={PlataformasSpaceX} />
            <Screen name="BarcosSpaceX" component={BarcosSpaceX} />
            <Screen name="NoticiasSpaceX" component={NoticiasSpaceX} />
            <Screen name="ArticlePageSpaceX" component={ArticlePageSpaceX} />

            <Screen name="DetailsPlanets" component={DetailsPlanets} />
        </Navigator>
    );
}