import { type } from 'os';
import React, { useEffect, useState } from 'react';

import {
    Container,
    ImageApi,
    ViewHorizontal,
    TextDescricao,
    TextValor,
    ViewVertical
} from './styles';

export type PlataformaProps = {
    full_name: string;
    locality: string;
    region: string;
    details: string;
    status: string;
    images: [];
}

type Props = {
    data: PlataformaProps;
}

export function CardPlataforma({ data }: Props) {
 

    const imageApi = String(data.images.large)
    return (
        <Container>

            <ImageApi source={{uri: imageApi}} />

            <ViewHorizontal>
                <TextDescricao>Localização: </TextDescricao>
                <TextValor>{data.locality}</TextValor>
            </ViewHorizontal>

            <ViewHorizontal>
                <TextDescricao>Região: </TextDescricao>
                <TextValor>{data.region}</TextValor>
            </ViewHorizontal>

            <ViewHorizontal>
                <TextDescricao>Status: </TextDescricao>
                <TextValor>{data.status}</TextValor>
            </ViewHorizontal>

            <ViewVertical>
                <TextDescricao>Detalhes: </TextDescricao>
                <TextValor>{data.details}</TextValor>
            </ViewVertical>


        </Container>
    );
}