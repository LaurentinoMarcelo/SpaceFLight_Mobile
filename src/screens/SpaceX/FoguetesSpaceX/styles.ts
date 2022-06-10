import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const ImageLogo = styled.Image`
width: 100%;
height:63px;
margin-bottom: 20px;
`;

export const TextTitulo = styled.Text`
font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(24)}px;
 margin-bottom: 20px;
`;


