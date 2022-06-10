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

export type RocketProps = {
    name: string;
    height: [];
    mass: [];
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    description: string;
    flickr_images: [];
}

type Props = {
    data: RocketProps;
}

export function CardFoguetes({ data }: Props) {

    const array1 = data.flickr_images;
    const firstElement = array1.shift();
    String(firstElement);
   

    return (
        <Container>

            <ImageApi source={{uri: firstElement}} />

            <ViewHorizontal>
                <TextDescricao>Nome: </TextDescricao>
                <TextValor>{data.name}</TextValor>
            </ViewHorizontal>

            <ViewHorizontal>
                <TextDescricao>Altura: </TextDescricao>
                <TextValor>{data.height.meters} metros</TextValor>
            </ViewHorizontal>

            <ViewHorizontal>
                <TextDescricao>Peso: </TextDescricao>
                <TextValor>{data.mass.kg} Kg</TextValor>
            </ViewHorizontal>

            <ViewHorizontal>
                <TextDescricao>Custo lançamento: </TextDescricao>
                <TextValor>U$ {data.cost_per_launch}</TextValor>
            </ViewHorizontal>

            <ViewHorizontal>
                <TextDescricao>Percentual sucesso: </TextDescricao>
                <TextValor>{data.success_rate_pct}%</TextValor>
            </ViewHorizontal>

            <ViewHorizontal>
                <TextDescricao>Primeiro voo: </TextDescricao>
                <TextValor>{data.first_flight}</TextValor>
            </ViewHorizontal>

            <ViewVertical>
                <TextDescricao>Descrição: </TextDescricao>
                <TextValor>{data.description}</TextValor>
            </ViewVertical>


        </Container>
    );
}