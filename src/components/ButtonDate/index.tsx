import React from 'react';

import {
    Container,
    TituloButton
} from './styles';

interface Props {
    title: string;
    onPress?: () => void;
}
export function ButtonDate({ title, onPress }: Props) {
    return (
        <Container onPress={onPress}>
            <TituloButton>{title}</TituloButton>
        </Container>
    );
}