import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import {NativeModules} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const {StatusBarManager} = NativeModules;

const height = StatusBarManager.HEIGHT;

export const Container = styled.View`
    color: ${theme.colors.color_article};
    width: 100%;
    height: 100%;
    padding-top: ${height/3}px;
    background-color: ${theme.colors.primary};;
`;

export const ImageLogo = styled.Image`
width: 90px;
height: 90px;
margin-right: 20px;
`;

export const TitleNews = styled.Text`
 width: 100%;
 padding-top: 10px;
 padding-bottom: 10px;
 font-family: ${theme.fonts.bold};
 color: ${theme.colors.color_text};
 font-size: ${RFValue(30)}px;
 margin-left: 10px;
 background-color: ${theme.colors.primary};
`;

export const Search = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 70px;
   padding: 20px;
`;

export const Paginacao = styled.View`
    width: 100%;
    height: 56px;
`;

export const ViewSelectData = styled.View`
margin-top: 10px;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;

export const FlatListArticles = styled.FlatList`
    padding: 10px;
`;