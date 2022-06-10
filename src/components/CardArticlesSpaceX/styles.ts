import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
    padding: 20px;
    justify-content: space-between;
    margin-bottom: 20px;
    border-radius: 20px;
    border: 1px solid ${theme.colors.color_button};
    background-color: ${theme.colors.color_article};
`;

export const Titulo = styled.Text`
 width: 100%;
 font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(18)}px;
 margin-bottom: 10px;
`;

export const Sumary = styled.Text`
 width: 59%;
 font-family: ${theme.fonts.medium};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(15)}px;
 margin-bottom: 10px;
`;

export const ImageNews = styled.Image`
width: 39%;
height: 100%;
border-radius: 10px;
min-height: 100px;
`;

export const TextPublished = styled.Text`
 font-family: ${theme.fonts.regular};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(12)}px;

`;
