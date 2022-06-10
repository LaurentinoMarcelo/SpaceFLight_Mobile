import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`

`;

export const Card = styled.TouchableOpacity`
height: 160px;
margin-right: 10px;
align-items: center;
`;

export const ImageMenu = styled.Image`
width: 95px;
height: 95px;
border-radius: 10px;
`;

export const TextMenu = styled.Text`
  font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(15)}px;
`;

export const ViewCardPlanet = styled.ScrollView`
height: 115px;
`;