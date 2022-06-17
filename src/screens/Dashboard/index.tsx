import React, { useEffect, useState } from 'react';

import { Dimensions, ImageBackground, ScrollView, StatusBar } from 'react-native';

import { Header } from '../../components/Header';
import theme from '../../global/styles/theme';

import {
    Container,
    TextTopico,
    ViewListArticle,
    FlatListArticles,
    CampoImageNasa,
    ImageNasa,
    ViewTextImageNasa,
    TextImageNasa,
    TextDescricaoImage,
    ViewSpaceX,
    TextDescricaoSpaceX,
    ViewSistemaSolar,
} from './styles';

import { CardArticlesHorizontal } from "../../components/CardArticlesHorizontal";
import api from '../../api/API_SpaceFlight/spaceflight';
import { apiNasa } from '../../api/API_Nasa/imagemDiaNasa';
import { CardSpaceXMenu } from '../../components/CardSpaceXMenu';
import { CardPlanetMenu } from '../../components/CardPlanetMenu';

export function Dashboard() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;

    const [dataArticles, setDataArticles] = useState([]);
    const [dataNasa, setDataNasa] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            api
                .get("/articles?_limit=20")
                .then((response) => setDataArticles(response.data))

            apiNasa
                .get("")
                .then((response) => setDataNasa(response.data))

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [])

    
    return (
        <Container>

            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primary} />

            <ImageBackground
                source={require('../../assets/images/background_app.png')}
                style={{ width: width, height: height, padding: 10 }}
            >

                <ScrollView>

                    <Header />

                    <TextTopico>Últimas notícias</TextTopico>

                    <ViewListArticle>
                        <FlatListArticles
                            data={dataArticles}
                            horizontal={true}
                            renderItem={({ item }) => <CardArticlesHorizontal data={item} />}
                        />
                    </ViewListArticle>

                    <CampoImageNasa>
                        <ImageNasa source={{ uri: dataNasa.url }} />
                        <ViewTextImageNasa>
                            <TextImageNasa>Imagem do dia da Nasa</TextImageNasa>
                            <TextDescricaoImage>{dataNasa.title}</TextDescricaoImage>
                        </ViewTextImageNasa>
                    </CampoImageNasa>

                    <ViewSpaceX>
                        <TextTopico>SpaceX</TextTopico>
                        <TextDescricaoSpaceX>Fique por dentro de tudo que envolve a maior empresa privada {'\n'}
                            de exploração espacial do mundo.</TextDescricaoSpaceX>

                        <CardSpaceXMenu />
                    </ViewSpaceX>

                    <ViewSistemaSolar>
                        <TextTopico>Sistema solar</TextTopico>
                        <TextDescricaoSpaceX>Conheça mais detalhes dos planetas que habitam nosso {'\n'}
                            sistema solar.</TextDescricaoSpaceX>

                        <CardPlanetMenu />
                    </ViewSistemaSolar>

                    <ViewSistemaSolar>
                        <TextTopico>Sobre Nós</TextTopico>
                        <TextDescricaoSpaceX>Conheça a nossa missão e entre em contato para nos dar{'\n'}
                            feedback sobre oportunidades de melhoria.</TextDescricaoSpaceX>
                    </ViewSistemaSolar>
                </ScrollView>
            </ImageBackground>
        </Container>
    );
}