import React, { useEffect, useState } from 'react';

import {
    Container,
    ViewCardPlanet,
    Card,
    ImageMenu,
    TextMenu,
} from './styles';

import { jupiter, mars, mercure, neptune, saturne, terre, uranus, venus } from "../../assets/images/index"
import { useNavigation } from '@react-navigation/native';
import { apisPlanets } from '../../api/API_SystemeSolaris/infoPlantes';

export function CardPlanetMenu() {
    const { navigate } = useNavigation();

    const [dataPlanet, setDataPlanet] = useState([]);
    const [namePlanet, setNamePlanet] = useState();

    const [imagePlanet, setImagePlanet] = useState();
    const [namePlanetSelect, setNamePlanetSelect] = useState("");
    const [tempPlanet, setTempPlanet] = useState();
    const [massaPlanet, setMassaPlanet] = useState();
    const [raioPlanet, setRaioPlanet] = useState();
    const [gravidadePlanet, setGravidadePlanet] = useState();
    const [fugaPlanet, setFugaPlanet] = useState();
    const [descobridorPlanet, setDescobridorPlanet] = useState();
    const [densidadePlanet, setDensidadePlanet] = useState();
    const [volumePlanet, setVolumePlanet] = useState();
    const [achatamentoPlanet, setAchatamentoPlanet] = useState();
    const [rotacaoPlanet, setRotacaoPlanet] = useState();
    const [inclinacaoPlanet, setInclinicaoPlanet] = useState();
    const [nomeLuas, setNomesLuas] = useState([]);
    const [numberLuas, setNumberLuas] = useState();

    const infoPlanets = {
        imagemPlanet: imagePlanet,
        nome: namePlanetSelect,
        temperatura: tempPlanet,
        massa: massaPlanet,
        raio: raioPlanet,
        gravidade: gravidadePlanet,
        fuga: fugaPlanet,
        descoberto: descobridorPlanet,
        densidade: densidadePlanet,
        volume: volumePlanet,
        achatamento: achatamentoPlanet,
        rotacao: rotacaoPlanet,
        inclinicao: inclinacaoPlanet,
        numeroLuas: numberLuas,
        nomeDasLuas: nomeLuas,
    }

    async function SelectPlanet(planet: string) {
        try {
            await apisPlanets
                .get("/" + planet)
                .then((response) => setDataPlanet(response.data))

        } catch (error) {
            console.log(error);
        }
        let quantidadeLuas = dataPlanet.moons;
                
        if (quantidadeLuas == null) {
            setNumberLuas(0) ;
        }else{
            
            let array = quantidadeLuas.map(function(item){
                var numeros = nomeLuas;
                numeros.push(item.moon);
                setNomesLuas(numeros)
                setNumberLuas(nomeLuas.length);
                return array
            })

        }

        setNamePlanetSelect(dataPlanet.name);
        setTempPlanet(dataPlanet.avgTemp);
        setMassaPlanet(dataPlanet.mass);
        setRaioPlanet(dataPlanet.meanRadius);
        setGravidadePlanet(dataPlanet.gravity);
        setFugaPlanet(dataPlanet.escape)
        setDensidadePlanet(dataPlanet.density) ;
        setVolumePlanet(dataPlanet.vol) ;
        setAchatamentoPlanet( dataPlanet.eccentricity);
        setRotacaoPlanet(dataPlanet) ;
        setInclinicaoPlanet(dataPlanet.inclination);        
    }
    

    function handleMercurio() {
        setImagePlanet(mercure);
        SelectPlanet("mercury");
        navigate('DetailsPlanets', { infoPlanets });
    }

    function handleVenus() {
        SelectPlanet("venus");
        setImagePlanet(venus);
        navigate('DetailsPlanets', { infoPlanets });
    }

    function handleTerra() {
        SelectPlanet("earth");
        setImagePlanet(terre);
        navigate('DetailsPlanets', { infoPlanets });
    }

    function handleMarte() {
        SelectPlanet("mars");
        setImagePlanet(mars);
        navigate('DetailsPlanets', { infoPlanets });
    }

    function handleJupiter() {
        SelectPlanet("jupiter");
        setImagePlanet(jupiter);
        navigate('DetailsPlanets', { infoPlanets });
    }

    function handleSaturno() {
        SelectPlanet("saturn");
        setImagePlanet(saturne);
        navigate('DetailsPlanets', { infoPlanets });
    }

    function handleUrano() {
        SelectPlanet("uranus");
        setImagePlanet(uranus);
        navigate('DetailsPlanets', { infoPlanets });
    }

    function handleNeturno() {
        SelectPlanet("neptune");
        setImagePlanet(neptune);
        navigate('DetailsPlanets', { infoPlanets });
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