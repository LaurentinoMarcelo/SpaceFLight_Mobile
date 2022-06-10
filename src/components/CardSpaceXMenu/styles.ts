import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Card = styled.TouchableOpacity`
margin-right: 10px;
align-items: center;
`;

export const ImageMenu = styled.Image`
width: 85px;
height: 115px;
border-radius: 10px;
`;

export const TextMenu = styled.Text`
  font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(15)}px;
`;

export const ViewCardSpaceX = styled.ScrollView`

`;