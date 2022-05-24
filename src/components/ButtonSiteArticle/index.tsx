import React from 'react';

import {
    Container,
    TitleButton
} from './styles';

interface Props {
    title: string;
    onPress: () => void;
}

export function ButtonSiteArticle({ title, onPress }: Props) {
    return (
        <Container onPress={onPress}>
            <TitleButton>{title}</TitleButton>
        </Container>
    );
}