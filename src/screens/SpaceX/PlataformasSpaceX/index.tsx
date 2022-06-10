import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, StatusBar } from 'react-native';
import { Header } from '../../../components/Header';
import theme from '../../../global/styles/theme';

import {
  Container,
  ImageLogo,
  TextTitulo,
} from './styles';

import { CardPlataforma } from '../../../components/CardPlataforma';
import { apisSpacexPlataformas } from '../../../api/API_SpaceX/spaceXPlataforma';
import { spaceXLogo } from '../../../assets/images';

export function PlataformasSpaceX() {
  var width = Dimensions.get('window').width;
  var height = Dimensions.get('window').height;

  const [dataPlataformas, setDataPlataformas] = useState([]);

  useEffect(() => {
    try {
      apisSpacexPlataformas
        .get("")
        .then((response) => setDataPlataformas(response.data))

    } catch (error) {
      console.log(error);

    }
    console.log(dataPlataformas);
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

        <TextTitulo>Plataformas</TextTitulo>

        <FlatList
          data={dataPlataformas}
          renderItem={({item}) => <CardPlataforma data={item}/>}
        />

      </ImageBackground>

    </Container>
  );
}