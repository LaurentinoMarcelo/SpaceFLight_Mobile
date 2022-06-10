import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    padding: 10px;
`;

export const ImageLogo = styled.Image`
width: 220px;
height: 93px;
`;

export const TextTitulo = styled.Text`
font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(24)}px;
`;

export const ImageApi = styled.Image`
margin-top: 20px;
width: 100%;
height: 200px;
border-radius: 10px;
margin-bottom: 10px;
`;

export const ViewHorizontal = styled.View`
flex-direction: row;
align-items: center;
margin-bottom: 5px;
`;

export const TextDescricao = styled.Text`
font-family: ${theme.fonts.regular};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(12)}px;
`;

export const TextValor = styled.Text`
font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(16)}px;
`;

export const ViewVertical = styled.View`
`;
