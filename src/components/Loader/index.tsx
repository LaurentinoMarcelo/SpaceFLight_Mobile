import React from 'react';
import LottieView from 'lottie-react-native';

import {
    Container
} from './styles';
import { StatusBar } from 'expo-status-bar';
import theme from '../../global/styles/theme';

export function Loader() {
    return (
        <Container>
            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primary} />
            
                <LottieView source={require('../../assets/animation/loading.json')} autoPlay loop />
            
                <LottieView source={require('../../assets/animation/loading_text.json')} autoPlay loop />
        
        </Container>
    );
}