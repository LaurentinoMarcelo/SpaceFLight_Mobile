import React from 'react';

import {
    Container,
    Titulo,
    TextPublished,
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useEffect } from 'react';

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

export function CardArticles({ data }: Props) {

    const { navigate } = useNavigation();

    const [dateFormated, setDateFormated] = useState('');

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

    useEffect(() => {
        handleDate();
    }, [])

    return (
        <Container onPress={DetailsArticles}>
            <Titulo>{data.title}</Titulo>
            <TextPublished>Publicado em {dateFormated}</TextPublished>
        </Container>

    );
}
