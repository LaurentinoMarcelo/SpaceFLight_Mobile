import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { LogoSimple } from '../../assets/images';

import {
    Container,
    ImageLogo,
    TextLogo,
} from './styles';


export function Header() {
    const { navigate } = useNavigation();
    
    function handleDashboard() {
        navigate('Dashboard');
    }
    
    return (
        <Container onPress={handleDashboard}>
            <ImageLogo source={LogoSimple} />
            <TextLogo>Space Flight News</TextLogo>
        </Container>
    );
}