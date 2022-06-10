import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1; 
`;

export const ScrollViewAricle = styled.ScrollView`
   flex: 1;
   margin-top: 10px;
   margin-bottom: 10px;
`;

export const TitleArticle = styled.Text`
font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(25)}px;
 text-align: center;
`;

export const ImageArticle = styled.Image`
width: 100%;
height: 35%;
border-radius: 20px;
min-height: 100px;
margin-top: 20px;
`;

export const TextArticle = styled.Text`
font-family: ${theme.fonts.medium};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(15)}px;
 text-align: justify;
 margin-top: 20px;
`;

export const ViewFonte = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const TextFont = styled.Text`
font-family: ${theme.fonts.regular};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(14)}px;
`;

export const TextPublished = styled.Text`
margin-top: 10px;
 font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(12)}px;
`;
