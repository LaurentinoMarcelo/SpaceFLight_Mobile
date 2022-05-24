import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
    padding: 10px;
    background-color: ${theme.colors.color_article};
    border-radius: 10px;
    border: 5px solid ${theme.colors.color_button};
`;

export const TitleButton = styled.Text`
font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(16)}px;
`;