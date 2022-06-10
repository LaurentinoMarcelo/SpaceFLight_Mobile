import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
margin-bottom: 10px;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const TextLogo = styled.Text`
font-size: ${RFValue(20)}px;
font-family: ${theme.fonts.bold};
color: ${theme.colors.color_text};
`;

export const ImageLogo = styled.Image`
width: 60px;
height: 45px;
`;