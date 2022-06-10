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

export type NavioProps = {
    name: string;
    type: string;
    roles: [];
    mass_kg: string;
    year_built: string;
    image: string;
    home_port: string;
}

type Props = {
    data: NavioProps;
}

export function CardNavio({ data }: Props) {
 

    return (
        <Container>

            <ImageApi source={{uri: data.image}} />

            <ViewHorizontal>
                <TextDescricao>Nome: </TextDescricao>
                <TextValor>{data.name}</TextValor>
            </ViewHorizontal>

            <ViewHorizontal>
                <TextDescricao>Tipo: </TextDescricao>
                <TextValor>{data.type}</TextValor>
            </ViewHorizontal>

            <ViewHorizontal>
                <TextDescricao>Funções: </TextDescricao>
                <TextValor>{data.roles}</TextValor>
            </ViewHorizontal>

            <ViewHorizontal>
                <TextDescricao>Peso: </TextDescricao>
                <TextValor>{data.mass_kg}Kg</TextValor>
            </ViewHorizontal>

            <ViewHorizontal>
                <TextDescricao>Ano construção: </TextDescricao>
                <TextValor>{data.year_built}</TextValor>
            </ViewHorizontal>

            <ViewHorizontal>
                <TextDescricao>Porto Origem: </TextDescricao>
                <TextValor>{data.home_port}</TextValor>
            </ViewHorizontal>


        </Container>
    );
}