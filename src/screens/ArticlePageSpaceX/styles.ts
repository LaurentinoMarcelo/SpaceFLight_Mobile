import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.primary};
    padding: 10px;
    align-items: center;
`;

export const ViewHorizontal = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0px 0px 10px 5px;
`;

export const ImageLogo = styled.Image`
width: 90px;
height: 90px;

`;