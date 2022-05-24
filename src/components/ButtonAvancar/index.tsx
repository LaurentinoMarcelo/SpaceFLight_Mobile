import React from 'react';

import { AntDesign } from '@expo/vector-icons'; 

import {
    Container,
    TituloButton
} from './styles';

interface Props {
    title: string;
    onPress?: () => void;
}
export function ButtonAvancar({ title, onPress }: Props) {
    return (
        <Container onPress={onPress}>
            <TituloButton>{title}</TituloButton>
            <AntDesign name="arrowright" size={24} color="white" />
        </Container>
    );
}