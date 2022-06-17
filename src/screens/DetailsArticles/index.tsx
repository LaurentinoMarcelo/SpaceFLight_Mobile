import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, ImageBackground, StatusBar } from 'react-native';
import api from '../../api/API_SpaceFlight/spaceflight';
import { ButtonSiteArticle } from '../../components/ButtonSiteArticle';
import { Header } from '../../components/Header';
import theme from '../../global/styles/theme';

import {
    Container,
    ScrollViewAricle,
    TitleArticle,
    ImageArticle,
    TextArticle,
    ViewFonte,
    TextFont,
    TextPublished,
} from './styles';

interface Props {
    infoArticle: {
        id: string;
        featured: boolean;
        default: false;
        title: string;
        url: string;
        imageUrl: string;
        newsSite: string;
        summary: string;
        publishedAt: string;
    }
}

export function DetailsArticles() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;

    const axios = require("axios");

    const route = useRoute();
    const { navigate } = useNavigation();

    const { infoArticle } = route.params as Props;
    const [dateFormated, setDateFormated] = useState('');

    const [idArticle, setIdArticle] = React.useState(infoArticle.id)
    const [title, setTitle] = useState(infoArticle.title);
    const [featured, setFeature] = useState(infoArticle.title);
    const [defaultt, setDefault] = useState(infoArticle.default);
    const [publishedAt, setPublisheAt] = useState(infoArticle.publishedAt)
    const [urlImage, setUrlImage] = useState(infoArticle.imageUrl);
    const [summary, setSummary] = useState(infoArticle.summary);
    const [newsSite, setNewsSite] = useState(infoArticle.newsSite);
    const [urlSite, setUrlSite] = useState(infoArticle.url);

    const [titleTraduzido, setTitleTraduzido] = useState('')
    const [detalhesTraduzido, setDetalhesTraduzido] = useState('')

    const [loading, setLoading] = useState(false);

    const siteArticle = {
        id: idArticle,
        featured: featured,
        default: defaultt,
        title: title,
        url: urlSite,
        imageUrl: urlImage,
        newsSite: newsSite,
        summary: summary,
        publishedAt: publishedAt
    }

    function handleDate() {
        var date = new Date(publishedAt),
            dia = date.getDate().toString(),
            diaF = (dia.length == 1) ? '0' + dia : dia,
            mes = (date.getMonth() + 1).toString(),
            mesF = (mes.length == 1) ? '0' + mes : mes,
            anoF = date.getFullYear();
        setDateFormated(diaF + "/" + mesF + "/" + anoF)
        return diaF + "/" + mesF + "/" + anoF;
    };

    function handleNavigationSite() {
        navigate('ArticlePage', { siteArticle });
    }

    function handleDashboard() {
        navigate('UltimasNoticias');
    }

    useEffect(() => {
        handleDate();
    }, [])



    return (
        <Container>
            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primary} />

            {
                loading
                    ?
                    <ActivityIndicator size="large" color="#00ff00" />
                    :
                    <ImageBackground
                        source={require('../../assets/images/background_app.png')}
                        style={{ width: width, height: height, padding: 20 }}
                    >
                        <Header />

                        <TitleArticle>{title}</TitleArticle>

                        <TextPublished>Publicado em {dateFormated}</TextPublished>

                        <ImageArticle source={{ uri: urlImage }} />
                        <ScrollViewAricle >
                            <TextArticle>{summary}</TextArticle>
                        </ScrollViewAricle>
                        <ViewFonte>
                            <TextFont>Fonte: {newsSite}</TextFont>

                            <ButtonSiteArticle title='Acessar o site' onPress={handleNavigationSite} />
                        </ViewFonte>

                    </ImageBackground>
            }

        </Container>
    );
}