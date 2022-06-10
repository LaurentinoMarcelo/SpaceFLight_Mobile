import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, StatusBar } from 'react-native';
import { apisSpacexNavios } from '../../../api/API_SpaceX/spaceXNavios';
import { spaceXLogo } from '../../../assets/images';
import { CardNavio } from '../../../components/CardNavio';
import { Header } from '../../../components/Header';
import theme from '../../../global/styles/theme';

import {
  Container,
  ImageLogo,
  TextTitulo,
} from './styles';

export function BarcosSpaceX() {
  var width = Dimensions.get('window').width;
  var height = Dimensions.get('window').height;

  const [dataBarcos, setDataBarcos] = useState([]);

  useEffect(() => {
    try {
      apisSpacexNavios
        .get("")
        .then((response) => setDataBarcos(response.data))
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
        
        <TextTitulo>Barcos</TextTitulo>

        <FlatList
          data={dataBarcos}
          renderItem={({item}) => <CardNavio data={item}/>}
        />

      </ImageBackground>
    </Container>
  );
}