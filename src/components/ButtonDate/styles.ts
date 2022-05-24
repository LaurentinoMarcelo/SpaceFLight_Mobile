import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
    width: 40%;
    flex-direction: row;
    padding: 1%;
    border-radius: 10px;
    background-color: ${theme.colors.color_article};
    border: 1px solid ${theme.colors.color_button};
`;

export const TituloButton = styled.Text`
width: 100%;
 font-family: ${theme.fonts.bold};
 font-weight: bold;
 color: ${theme.colors.color_text};
 font-size: ${RFValue(15)}px;
 padding: 10px;
 text-align: center;
`;