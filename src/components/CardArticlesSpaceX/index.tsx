import React from 'react';

import {
    Container,
    Titulo,
    TextPublished,
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

export type ArticlePropsSpaceX = {
    id: string;
    title: string;
    details: string;
    event_date_utc: string;
    links:[];
}

type Props = {
    data: ArticlePropsSpaceX;
};

export function CardArticlesSpaceX({ data }: Props) {

    const { navigate } = useNavigation();

    const [dateFormated, setDateFormated] = useState('');
    
    const linkApi = String(data.links.article)
    console.log("link site "+ linkApi);
    

    const siteArticle = {
        id: data.id,
        featured: true,
        default: false,
        title: data.title,
        url: linkApi,
        imageUrl: 'string',
        newsSite: 'string',
        summary: data.details,
        publishedAt: data.event_date_utc,
        links: data.links,
    }

    function DetailsArticles() {
        navigate('ArticlePageSpaceX', { siteArticle });
    }

    function handleDate() {
        var date = new Date(data.event_date_utc),
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
