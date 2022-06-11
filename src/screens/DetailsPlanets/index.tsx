import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import { Header } from '../../components/Header';
import theme from '../../global/styles/theme';

import {
    Container,
    NamePlanet,
    ImagePlanet,
    ViewHorizontal,
    TextDescription,
    TextValue,
} from './styles';

interface Props {
    infoPlanets: {
        imagemPlanet: string;
        nome: string;
        temperatura: number;
        massa: [];
        raio: number;
        gravidade: number;
        fuga: number;
        volume: number;
        achatamento: number;
        rotacao: number;
        inclinicao: number;
        numeroLuas: number;
        nomeDasLuas: [];
    }
}

interface Props2 {
    planetSelect: {
        name: string;
    }
}

import { jupiter, mars, mercure, neptune, saturne, terre, uranus, venus } from "../../assets/images/index"
import { useNavigation, useRoute } from '@react-navigation/native';

export function DetailsPlanets() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;

    const route = useRoute();
    const { navigate } = useNavigation();

    const { infoPlanets } = route.params as Props;
    const { planetSelect } = route.params as Props2;

    //const [imagePlanet, setImagePlanet] = useState(infoPlanets.imagemPlanet);
    const [namePlanetSelect, setNamePlanetSelect] = useState(infoPlanets.nome);
    const [tempPlanet, setTempPlanet] = useState(infoPlanets.temperatura);
    const [massaPlanet, setMassaPlanet] = useState();
    const [raioPlanet, setRaioPlanet] = useState(infoPlanets.raio);
    const [gravidadePlanet, setGravidadePlanet] = useState(infoPlanets.gravidade);
    const [fugaPlanet, setFugaPlanet] = useState();
    const [volumePlanet, setVolumePlanet] = useState();
    const [achatamentoPlanet, setAchatamentoPlanet] = useState(infoPlanets.achatamento);
    const [rotacaoPlanet, setRotacaoPlanet] = useState();
    const [inclinacaoPlanet, setInclinicaoPlanet] = useState(infoPlanets.inclinicao);
    const [nomeLuas, setNomesLuas] = useState(infoPlanets.nomeDasLuas);
    const [numberLuas, setNumberLuas] = useState(infoPlanets.numeroLuas);

    console.log(infoPlanets);
    
    return (
        <Container>

            <ImageBackground
                source={require('../../assets/images/background_sol.png')}
                style={{ width: width, height: height, padding: 20 }}
            >
                <Header />

                <NamePlanet>{namePlanetSelect}</NamePlanet>

                <ImagePlanet source={jupiter} />

                <ViewHorizontal>
                    <TextDescription>Temperatura: </TextDescription>
                    <TextValue>{tempPlanet}</TextValue>
                </ViewHorizontal>

                <ViewHorizontal>
                    <TextDescription>Massa: </TextDescription>
                    <TextValue>{massaPlanet}</TextValue>
                </ViewHorizontal>

                <ViewHorizontal>
                    <TextDescription>Raio: </TextDescription>
                    <TextValue>{raioPlanet}</TextValue>
                </ViewHorizontal>

                <ViewHorizontal>
                    <TextDescription>Gravidade: </TextDescription>
                    <TextValue>{gravidadePlanet}</TextValue>
                </ViewHorizontal>

                <ViewHorizontal>
                    <TextDescription>Densidade: </TextDescription>
                    <TextValue></TextValue>
                </ViewHorizontal>

                <ViewHorizontal>
                    <TextDescription>Volume: </TextDescription>
                    <TextValue></TextValue>
                </ViewHorizontal>

                <ViewHorizontal>
                    <TextDescription>Achatamento: </TextDescription>
                    <TextValue></TextValue>
                </ViewHorizontal>

                <ViewHorizontal>
                    <TextDescription>Rotação lateral: </TextDescription>
                    <TextValue></TextValue>
                </ViewHorizontal>

                <ViewHorizontal>
                    <TextDescription>Inclinação axial: </TextDescription>
                    <TextValue></TextValue>
                </ViewHorizontal>
                <ViewHorizontal>
                    <TextDescription>Luas: </TextDescription>
                    <TextValue></TextValue>
                </ViewHorizontal>
                <ViewHorizontal>
                    <TextDescription>Nome das luas: </TextDescription>
                    <TextValue></TextValue>
                </ViewHorizontal>

            </ImageBackground>

        </Container>
    );
}