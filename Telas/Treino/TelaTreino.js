import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import ProgressBar from 'react-native-progress/Bar';
import styles from "../estilo";

function calculaTotalSeries(exercicios) {
  let arraySoma=[...exercicios];
  let x = 0;
  for(let data of arraySoma){
    x += data.series;
  }
  return (100/x);
};

var seriesCompletadas = 0;

var finalizando = false;

export default function TelaTreino({ navigation, route }) {

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (finalizando) {
          finalizando = false;
          return;
        }
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        encerrarTreinoSaida(e);
      }),
  );

  const exercicios = route.params;

  const [renderData, setRenderData] = useState(exercicios);

  const seriesTotais = calculaTotalSeries(exercicios);

  const Item = ({ title }) => (
    <View style={styles.btnsView}>
      <TouchableOpacity style={
                          title.selected==true
                          ? styles.genericBtnSelected : styles.genericBtn
                        }
        onPress={() => onPressHandler(title.value)}>
        <Text style={styles.btnText}>{title.label}</Text>
        <Text style={styles.btnText}>{title.selected!=true ? title.series + 'x' + title.repeticoes : 'Concluído'}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item} />
  );

  return (
    <View style={styles.containerMenus}>

      <StatusBar style="auto" />

      <View style={styles.btnsView}>
        <FlatList
          data={renderData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={{width: "100%"}}>
        <ProgressBar progress={seriesCompletadas} width={null} height={15} borderRadius={0} borderWidth={0} color={'#00ff00'} />
      </View>
      <TouchableOpacity style={styles.floatButton}
        onPress={() => encerrarTreino()}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#33ff33' }}>ENCERRAR TREINO</Text>
      </TouchableOpacity>

    </View>
  );

  function onPressHandler(id) {
    let renderDatas=[...renderData];
    for(let data of renderDatas){
      if(data.value==id){
        data.selected=(data.selected==null)?true:!data.selected;
        seriesCompletadas = (data.selected==true) ? seriesCompletadas+=(seriesTotais*data.series)/100 : seriesCompletadas-=(seriesTotais*data.series)/100;
        break;
      }
    }
    setRenderData(renderDatas);
  };

  function encerrarTreino(){
    let treinoCompleto = (seriesCompletadas>=1)? "Treino completo!": "Ainda restam exercícios não finalizados!";
    Alert.alert(
      "Deseja finalizar o treino?",
      treinoCompleto,
      [
        { text: "OK", onPress: () => { seriesCompletadas = 0; finalizando = true; navigation.pop(2); } },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
        
      ]
    );
  }

  function encerrarTreinoSaida(e){
    let treinoCompleto = (seriesCompletadas>=1)? "Treino completo!": "Ainda restam exercícios não finalizados!";
    Alert.alert(
      "Deseja sair do treino?",
      treinoCompleto,
      [
        { text: "OK", onPress: () => { seriesCompletadas = 0; navigation.dispatch(e.data.action); } },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
        
      ]
    );
  }

}