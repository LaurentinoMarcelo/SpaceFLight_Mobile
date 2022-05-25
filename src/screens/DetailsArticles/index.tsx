import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import api from '../../api/spaceflight';
import { LogoSimple } from '../../assets/images';
import { ButtonAvancar } from '../../components/ButtonAvancar';
import { ButtonSiteArticle } from '../../components/ButtonSiteArticle';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import theme from '../../global/styles/theme';

import axios from 'axios';

const baseUrl = 'https://api.spaceflightnewsapi.net/v3';

import {
    Container,
    Header,
    ImageLogo,
    TextLogo,
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

    const route = useRoute();
    const { navigate } = useNavigation();

    const [data, setData] = useState([]);

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

    const [nextId, setNextId] = useState(parseInt(idArticle) + 1);
    const [backId, setBackId] = useState(parseInt(idArticle) - 1)

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
        navigate('Dashboard');
    }

    async function handleArticleInicializar() {
        try {
            await api
                .get('/articles/' + nextId)
                .then((response) => setData(response.data))
            setLoading(false);
        } catch (error) {
            console.log(error);

        }

    }

    async function handleBackArticle() {

        setLoading(true);
        console.log("backid dentro da função back: " + backId);

        try {
            await api
                .get('/articles/' + backId)
                .then((response) => setData(response.data))
            console.log(data);

            setLoading(false);
        } catch (error) {
            console.log(error);
        }

        setIdArticle(data.id);
        setTitle(data.title);
        setPublisheAt(data.publishedAt);
        setUrlImage(data.imageUrl);
        setSummary(data.summary);
        setNewsSite(data.newsSite);
        setFeature(data.feature);
        setDefault(data.default);
        setUrlSite(data.url);

        setBackId(backId - 1);
        setNextId(nextId - 1);
    }

    async function handleNextArticle() {
        setLoading(true);
        console.log("nextId dentro da função next: " + nextId);
        try {
            await api
                .get('/articles/' + nextId)
                .then((response) => setData(response.data))
        } catch (error) {
            console.error(error);
        }

        setIdArticle(data.id);
        setTitle(data.title);
        setPublisheAt(data.publishedAt);
        setUrlImage(data.imageUrl);
        setSummary(data.summary);
        setNewsSite(data.newsSite);
        setFeature(data.feature);
        setDefault(data.default);
        setUrlSite(data.url);

        setNextId(nextId + 1);
        setNextId(nextId + 1);
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
                        style={{ flex: 1, padding: 20 }}
                    >
                        <Header onPress={handleDashboard}>
                                <ImageLogo source={LogoSimple} style={{ width: 60, height: 50, padding: 5 }} />
                                <TextLogo>Space Flight News</TextLogo>
                        </Header>

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