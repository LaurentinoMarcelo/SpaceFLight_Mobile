import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
`;

export const NamePlanet = styled.Text`
font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(24)}px;
 text-align: center;
`;

export const ImagePlanet = styled.Image`
margin-top: 20px;
width: 100%;
height: 200px;
border-radius: 10px;
margin-bottom: 20px;
`;

export const ViewVertical = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const ViewHorizontal = styled.View`
flex-direction: row;
align-items: center;
margin-bottom: 5px;
`;

export const TextDescription = styled.Text`
font-family: ${theme.fonts.regular};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(12)}px;
`;

export const TextValue = styled.Text`
font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(16)}px;
`;
