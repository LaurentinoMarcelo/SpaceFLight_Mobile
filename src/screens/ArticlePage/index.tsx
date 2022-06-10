import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { LogoSimple } from '../../assets/images';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { ButtonAvancar } from '../../components/ButtonAvancar';
import LottieView from 'lottie-react-native';

import api from '../../api/API_SpaceFlight/spaceflight';

import {
    Container,
    ViewHorizontal,
    ImageLogo
} from './styles'

interface Props {
    siteArticle: {
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

export function ArticlePage() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;

    const route = useRoute();
    const { navigate } = useNavigation();

    const { siteArticle } = route.params as Props;
    const [link, setLink] = React.useState(siteArticle.url)
    const [idArticle, setIdArticle] = React.useState(siteArticle.id)
    const [data, setData] = React.useState([]);

    const [loading, setLoading] = React.useState(false);

    const styles = StyleSheet.create({
        container: {
            width: width - 20,
            height: height - 10,
        },
    });

    const infoArticle = {
        id: siteArticle.id,
        featured: siteArticle.featured,
        default: siteArticle.default,
        title: siteArticle.title,
        url: siteArticle.url,
        imageUrl: siteArticle.imageUrl,
        newsSite: siteArticle.newsSite,
        summary: siteArticle.summary,
        publishedAt: siteArticle.publishedAt,
    }

    function handleDetailsArticles() {
        navigate('DetailsArticles', {infoArticle});
    }

    function handleDashboard() {
        navigate('UltimasNoticias');
    }

    async function handleArticleNext() {
        setLoading(true)
        let idNext = parseInt(idArticle) + 1;
        try {
            await api
                .get("/articles/" + idNext)
                .then((response) => setData(response.data))
                .catch((err) => {
                    console.log("ops! ocorreu um erro" + err);
                });

        } catch (error) {
            console.log(error);
        }
        setLink(siteArticle.url);
        setIdArticle(siteArticle.id);
        setLoading(false);
    }

    async function handleArticleBack() {
        setLoading(true)
        let idBack = parseInt(idArticle) - 1;
        try {
            await api
                .get("/articles/" + idBack)
                .then((response) => setData(response.data))
                .catch((err) => {
                    console.log("ops! ocorreu um erro" + err);
                });

        } catch (error) {
            console.log(error);
        }
        setLink(data.url);
        setIdArticle(data.id);
        setLoading(false);
    }

    return (
        <Container>
            <ViewHorizontal>
                <ButtonVoltar title='Voltar' onPress={handleDetailsArticles} />

                <TouchableOpacity onPress={handleDashboard}>
                    <ImageLogo source={LogoSimple} style={{width:60, height:50, padding:5}}/>
                </TouchableOpacity>

            </ViewHorizontal>
            {
                loading
                    ?
                    <LottieView source={require('../../assets/animation/nave_loading.json')} autoPlay loop />
                    :
                    <WebView
                        style={styles.container}
                        source={{ uri: link }}
                    />
            }
        </Container>
    );
}