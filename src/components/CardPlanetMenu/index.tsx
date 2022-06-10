import React from 'react';

import {
    Container,
    ViewCardPlanet,
    Card,
    ImageMenu,
    TextMenu,
} from './styles';

import { jupiter, mars, mercure, neptune, saturne, terre, uranus, venus } from "../../assets/images/index"

export function CardPlanetMenu() {
    return (
        <Container>
            <ViewCardPlanet horizontal={true}>
                <Card>
                    <ImageMenu source={mercure} />
                    <TextMenu>Mercúrio</TextMenu>
                </Card>

                <Card>
                    <ImageMenu source={venus} />
                    <TextMenu>Venus</TextMenu>
                </Card>

                <Card>
                    <ImageMenu source={terre} />
                    <TextMenu>Terra</TextMenu>
                </Card>

                <Card>
                    <ImageMenu source={mars} />
                    <TextMenu>Marte</TextMenu>
                </Card>

                <Card>
                    <ImageMenu source={jupiter} />
                    <TextMenu>Jupiter</TextMenu>
                </Card>

                <Card>
                    <ImageMenu source={saturne} />
                    <TextMenu>Saturno</TextMenu>
                </Card>

                <Card>
                    <ImageMenu source={uranus} />
                    <TextMenu>Urano</TextMenu>
                </Card>

                <Card>
                    <ImageMenu source={neptune} />
                    <TextMenu>Neptuno</TextMenu>
                </Card>

            </ViewCardPlanet>
        </Container>

    );
}