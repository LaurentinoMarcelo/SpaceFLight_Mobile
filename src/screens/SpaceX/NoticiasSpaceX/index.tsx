import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, StatusBar } from 'react-native';
import { apisSpacexHistory } from '../../../api/API_SpaceX/spaceXHistory';
import { spaceXLogo } from '../../../assets/images';
import { CardArticlesSpaceX } from '../../../components/CardArticlesSpaceX';
import { Header } from '../../../components/Header';
import theme from '../../../global/styles/theme';

import {
  Container,
  ImageLogo,
  TextTitulo,
} from './styles';


export function NoticiasSpaceX() {
  var width = Dimensions.get('window').width;
  var height = Dimensions.get('window').height;

  const [dataNoticias, setDataNoticias] = useState([]);

  useEffect(() => {
    try {
      apisSpacexHistory
        .get("")
        .then((response) => setDataNoticias(response.data))
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <Container>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.primary} />

      <ImageBackground
        source={require('../../../assets/images/background_app.png')}
        style={{ width: width, height: height, padding: 10 }}>

        <Header />

        <ImageLogo source={spaceXLogo}/>
        
        <TextTitulo>Últimas notícias</TextTitulo>

        <FlatList
          data={dataNoticias}
          renderItem={({item}) => <CardArticlesSpaceX data={item}/>}
        />

      </ImageBackground>

    </Container>
  );
}