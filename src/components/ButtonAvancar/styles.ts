import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
    width: 100px;
    flex-direction: row;
    padding: 5px;
`;

export const TituloButton = styled.Text`
font-family: ${theme.fonts.bold};
 font-weight: bold;
 color: ${theme.colors.color_button};
 font-size: ${RFValue(15)}px;
 margin-right: 5px;
`;