import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
    width: 125px;
    height: 100%;
    margin-top: 15px;
    margin-right: 12px;
`;

export const Titulo = styled.Text`
 width: 100%;
 text-align: center;
 font-family: ${theme.fonts.regular};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(12)}px;
`;

export const ImageArticle = styled.Image`
width: 100%;
height: 125px;
border-radius: 10px;
`;

