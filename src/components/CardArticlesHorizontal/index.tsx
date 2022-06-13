import React from 'react';

import {
    Container,
    Titulo,
    ImageArticle,

} from './styles';

import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

export type ArticleProps = {
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

type Props = {
    data: ArticleProps;
};

export function CardArticlesHorizontal({ data }: Props) {

    const { navigate } = useNavigation();

    const [dateFormated, setDateFormated] = useState('');

    const [titleTraduzido, setTitleTraduzido] = useState('')

    const infoArticle = {
        id: data.id,
        featured: data.featured,
        default: data.default,
        title: data.title,
        url: data.url,
        imageUrl: data.imageUrl,
        newsSite: data.newsSite,
        summary: data.summary,
        publishedAt: data.publishedAt,
    }

    function DetailsArticles() {
        navigate('DetailsArticles', { infoArticle });
    }

    function handleDate() {
        var date = new Date(data.publishedAt),
            dia = date.getDate().toString(),
            diaF = (dia.length == 1) ? '0' + dia : dia,
            mes = (date.getMonth() + 1).toString(),
            mesF = (mes.length == 1) ? '0' + mes : mes,
            anoF = date.getFullYear();
        setDateFormated(diaF + "/" + mesF + "/" + anoF)
        return diaF + "/" + mesF + "/" + anoF;
    };

    function translateTitle(titulo: string) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '302cb51109mshbb577f353623720p17620cjsn56eb6909aaae',
                'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
            }
        };

        fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en|pt%7Cit&q=' + titulo + '!&mt=1&onlyprivate=0&de=a%40b.c', options)
            .then(response => response.json())
            .then(response => setTitleTraduzido(response.responseData.translatedText))
            .catch(err => console.error(err));
    }

    translateTitle(data.title)

    useEffect(() => {
        handleDate();
    }, [])

    return (
        <Container onPress={DetailsArticles}>
            <ImageArticle source={{ uri: data.imageUrl }} />
            <Titulo>{titleTraduzido}</Titulo>
        </Container>

    );
}