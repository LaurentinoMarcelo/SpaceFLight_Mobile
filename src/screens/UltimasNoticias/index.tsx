import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StatusBar } from 'react-native';
import api from '../../api/API_SpaceFlight/spaceflight';

import { Searchbar } from 'react-native-paper';

import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Logo } from '../../assets/images';

import {
  Container,
  Search,
  ImageLogo,
  FlatListArticles,
  TitleNews
} from './styles';

import { CardArticles } from "../../components/CardArticles";
import theme from '../../global/styles/theme';
import { Loader } from '../../components/Loader';
import { getCurrentDate } from '../../utils/recuperarDate';

const numberOfItemsPerPageList = [10, 25, 50, 100];

export function UltimasNoticias() {
  var width = Dimensions.get('window').width;
  var height = Dimensions.get('window').height;

  const [data, setData] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [linkPaginacao, setLinkPaginacao] = useState("");
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
  let from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, totalArticles);

  const [loading, setLoading] = useState(true);

  const [dataSelecionadaInicial, setDataSelecionadaInicial] = useState(getCurrentDate);
  const [dataSelecionadaFinal, setDataSelecionadaFinal] = useState(getCurrentDate);

  const [isDatePickerVisibleInicial, setDatePickerVisibilityInicial] = useState(false);
  const [isDatePickerVisibleFinal, setDatePickerVisibilityFinal] = useState(false);

  function showDatePickerInicial() {
    setDatePickerVisibilityInicial(true);
  };

  function hideDatePickerInicial() {
    setDatePickerVisibilityInicial(false);
  };

  function showDatePickerFinal() {
    setDatePickerVisibilityFinal(true);
  };

  function hideDatePickerFinal() {
    setDatePickerVisibilityFinal(false);
  };

  let dataSelecionadaForamatadaInicial = "";

  const handleConfirmInicial = (date) => {
    var data = date,
      dia = data.getDate().toString(),
      diaF = dia.length == 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length == 1 ? "0" + mes : mes,
      anoF = data.getFullYear();

    dataSelecionadaForamatadaInicial = diaF + "/" + mesF + "/" + anoF;
    setDataSelecionadaInicial(dataSelecionadaForamatadaInicial);
    hideDatePickerInicial();
    setDataSelecionadaInicial(dataSelecionadaForamatadaInicial)
  };

  let dataSelecionadaForamatadaFinal = "";

  const handleConfirmFinal = (date) => {
    var data = date,
      dia = data.getDate().toString(),
      diaF = dia.length == 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length == 1 ? "0" + mes : mes,
      anoF = data.getFullYear();

    dataSelecionadaForamatadaFinal = diaF + "/" + mesF + "/" + anoF;
    setDataSelecionadaFinal(dataSelecionadaForamatadaFinal);
    hideDatePickerInicial();
    setDataSelecionadaFinal(dataSelecionadaForamatadaFinal)
  };

  useEffect(() => {
    try {
      api
        .get("/articles?_limit=100")
        .then((response) => setData(response.data))

      api
        .get("/articles/count")
        .then((response) => setTotalArticles(response.data))

      fetch('https://api.spacexdata.com/v3/rockets')
        .then((response) => response.json())
        .then((json) => console.log(json));

    } catch (error) {
      console.log(error);
      setLoading(false);
    }



  }, [])

  useEffect(() => {
    setLinkPaginacao("/articles?_limit=" + numberOfItemsPerPage + "&_start=" + from);

    async function handleArticles() {
      if (searchQuery != "") {
        await api
          .get("/articles?title_contains=" + searchQuery)
          .then((response) => setData(response.data))
          .catch((err) => {
            console.log("ops! ocorreu um erro" + err);
          });
        setLoading(false);
      } else {
        await api
          .get(linkPaginacao)
          .then((response) => setData(response.data))
          .catch((err) => {
            console.log("ops! ocorreu um erro" + err);
          });
        setLoading(false);

      }
    }
    handleArticles();
  }, [numberOfItemsPerPage, from, searchQuery]);

  React.useEffect(() => {
    setPage(0);
  }, [numberOfItemsPerPage]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.primary} />

      <ImageBackground
        source={require('../../assets/images/background_app.png')}
        style={{ width: width, height: height }}
      >

        <Search>
          <ImageLogo source={Logo} />

          <Searchbar
            style={{ width: 220, borderRadius: 30, fontSize: 12 }}
            placeholder="Digite o titulo"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </Search>

        <TitleNews>Novas notícias</TitleNews>

        <FlatListArticles
          data={data}
          renderItem={({ item }) => <CardArticles data={item} />}
        />
      </ImageBackground>

      <DateTimePickerModal
        isVisible={isDatePickerVisibleInicial}
        mode="date"
        onConfirm={handleConfirmInicial}
        onCancel={hideDatePickerInicial}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisibleFinal}
        mode="date"
        onConfirm={handleConfirmFinal}
        onCancel={hideDatePickerFinal}
      />

    </Container>
  );
}
