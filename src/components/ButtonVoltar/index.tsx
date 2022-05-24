import React from 'react';
 
import { Entypo } from '@expo/vector-icons'; 

import {
    Container,
    TituloButton
} from './styles';

interface Props {
    title: string;
    onPress?: () => void;
}
export function ButtonVoltar({ title, onPress }: Props) {
    return (
        <Container onPress={onPress}>
            <Entypo name="arrow-bold-left" size={24} color="white" />
            <TituloButton>{title}</TituloButton>
        </Container>
    );
}