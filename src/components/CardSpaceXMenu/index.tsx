import React from 'react';

import {
    ViewCardSpaceX,
    Card,
    ImageMenu,
    TextMenu,
} from './styles';

import { spaceXBarcos, spaceXFoguete, spaceXLancamento, spaceXNoticias } from "../../assets/images/index"
import { useNavigation } from '@react-navigation/native';

export function CardSpaceXMenu() {
    const { navigate } = useNavigation();

    function handleFoguetes() {
        navigate('FoguetesSpaceX');
    }

    function handlePlataformas() {
        navigate('PlataformasSpaceX');
    }

    function handleBarcos() {
        navigate('BarcosSpaceX');
    }

    function handleNoticias() {
        navigate('NoticiasSpaceX');
    }
    return (
        <ViewCardSpaceX horizontal={true}>
            <Card onPress={handleFoguetes}>
                <ImageMenu source={spaceXFoguete} />
                <TextMenu>Foguetes</TextMenu>
            </Card>

            <Card onPress={handlePlataformas}>
                <ImageMenu source={spaceXLancamento} />
                <TextMenu>Plataformas</TextMenu>
            </Card>

            <Card onPress={handleBarcos}>
                <ImageMenu source={spaceXBarcos} />
                <TextMenu>Barcos</TextMenu>
            </Card>

            <Card onPress={handleNoticias}>
                <ImageMenu source={spaceXNoticias} />
                <TextMenu>Noticias</TextMenu>
            </Card>

        </ViewCardSpaceX>
    );
}