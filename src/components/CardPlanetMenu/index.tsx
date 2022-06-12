import React from 'react';

import {
    Container,
    ViewCardPlanet,
    Card,
    ImageMenu,
    TextMenu,
} from './styles';

import { infoMercury, infoEath, infoMars, infoSaturne, infoUranus, infoNeptune, infoVenus, infoJupter} from '../../api/API_SystemeSolaris/infoPlantes';

import { useNavigation } from '@react-navigation/native';

import { mercure, jupiter, mars, neptune, saturne, terre, uranus, venus } from '../../assets/images';


export function CardPlanetMenu() {
    const { navigate } = useNavigation();


    function handleMercurio() {
        const infoPlanet = infoMercury;
        navigate('DetailsPlanets', { infoPlanet });
    }

    function handleVenus() {  
        const infoPlanet = infoVenus;
        navigate('DetailsPlanets', { infoPlanet });
    }

    function handleTerra() {  
        const infoPlanet = infoEath;
        navigate('DetailsPlanets', { infoPlanet });
    }

    function handleMarte() { 
        const infoPlanet = infoMars;   
        navigate('DetailsPlanets', { infoPlanet });
    }

    function handleJupiter() { 
        const infoPlanet = infoJupter;     
        navigate('DetailsPlanets', { infoPlanet });
    }

    function handleSaturno() {   
        const infoPlanet = infoSaturne;   
        navigate('DetailsPlanets', { infoPlanet });
    }

    function handleUrano() {
        const infoPlanet = infoUranus;
        navigate('DetailsPlanets', { infoPlanet });
    }

    function handleNeturno() {
        const infoPlanet = infoNeptune;
        navigate('DetailsPlanets', { infoPlanet });
    }

    return (
        <Container>
            <ViewCardPlanet horizontal={true}>
                <Card onPress={handleMercurio}>
                    <ImageMenu source={mercure} />
                    <TextMenu>Mercúrio</TextMenu>
                </Card>

                <Card onPress={handleVenus}>
                    <ImageMenu source={venus} />
                    <TextMenu>Venus</TextMenu>
                </Card>

                <Card onPress={handleTerra}>
                    <ImageMenu source={terre} />
                    <TextMenu>Terra</TextMenu>
                </Card>

                <Card onPress={handleMarte}>
                    <ImageMenu source={mars} />
                    <TextMenu>Marte</TextMenu>
                </Card>

                <Card onPress={handleJupiter}>
                    <ImageMenu source={jupiter} />
                    <TextMenu>Jupiter</TextMenu>
                </Card>

                <Card onPress={handleSaturno}>
                    <ImageMenu source={saturne} />
                    <TextMenu>Saturno</TextMenu>
                </Card>

                <Card onPress={handleUrano}>
                    <ImageMenu source={uranus} />
                    <TextMenu>Urano</TextMenu>
                </Card>

                <Card onPress={handleNeturno}>
                    <ImageMenu source={neptune} />
                    <TextMenu>Neptuno</TextMenu>
                </Card>

            </ViewCardPlanet>
        </Container>

    );
}