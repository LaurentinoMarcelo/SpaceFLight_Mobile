import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
`;

export const TextTopico = styled.Text`
font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(25)}px;
`;

export const ViewListArticle = styled.View`
height: 220px;
`;

export const FlatListArticles = styled.FlatList`
`;

export const CampoImageNasa = styled.View`
width: 100%;
height: 160px;
justify-content: space-between;
flex-direction: row;
margin-top: 15px;
`;

export const ImageNasa = styled.Image`
width: 49%;
height: 100%;
border-radius: 10px;
`;

export const ViewTextImageNasa = styled.View`
width: 49%;
height: 100%;
`;

export const TextImageNasa = styled.Text`
font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(20)}px;
 margin-bottom: 10px;
`;

export const TextDescricaoImage = styled.Text`
font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(15)}px;
`;

export const ViewSpaceX = styled.View`
    margin-top: 20px;

`;

export const TextDescricaoSpaceX = styled.Text`
font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(12)}px;
 margin-bottom: 10px;
`;

export const ViewSistemaSolar = styled.View`
    margin-top: 20px;

`;

