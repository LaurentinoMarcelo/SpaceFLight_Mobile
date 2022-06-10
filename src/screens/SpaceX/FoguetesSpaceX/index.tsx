import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, StatusBar } from 'react-native';
import { apisSpacexFogutes } from '../../../api/API_SpaceX/spaceXFoguetes';
import { Header } from '../../../components/Header';
import theme from '../../../global/styles/theme';
import { spaceXLogo } from '../../../assets/images';

import {
  Container,
  ImageLogo,
  TextTitulo,
} from './styles';
import { CardFoguetes } from '../../../components/CardFoguetes';

export function FoguetesSpaceX() {
  var width = Dimensions.get('window').width;
  var height = Dimensions.get('window').height;

  const [dataFoguetes, setDataFoguetes] = useState([]);

  useEffect(() => {
    try {
      apisSpacexFogutes
        .get("")
        .then((response) => setDataFoguetes(response.data))
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
        
        <TextTitulo>Foguetes</TextTitulo>

        <FlatList
          data={dataFoguetes}
          renderItem={({item}) => <CardFoguetes data={item}/>}
        />

      </ImageBackground>

    </Container>
  );
}