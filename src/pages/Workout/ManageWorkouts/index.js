import { StatusBar } from "react-native";
import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./styles";
import db from "../../../../Firebase";
import {
  collection, doc, getDocs, updateDoc,
} from 'firebase/firestore';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function TelaGerenciarTreino({ navigation, route }) {

  const data = route.params;

  const [renderData, setRenderData] = useState(data[0]);

  const [showAlert, setShowAlert] = useState(false);

  const Item = ({ title }) => (
    <View style={styles.btnsView}>
      <Text></Text>
      <TouchableOpacity style={
        title.selected == true
          ? styles.genericBtnSelected : styles.genericBtn
      }
        onPress={() => onPressHandler(title.id)}>
        <Text style={styles.btnText}>{title.nome}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item} />
  );

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Text style={styles.title}>Selecione os treinos que dejesa na sua conta</Text>

      <View style={styles.btnsView}>
        <FlatList
          data={renderData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <TouchableOpacity style={styles.btn}
        onPress={() => salvarTreinos()}>
        <Text style={styles.btnText}>Salvar Treinos</Text>
      </TouchableOpacity>

      <AwesomeAlert
        show={showAlert}
        showProgress={true}
        title="Carregando..."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={false}
        onDismiss={() => {
          hideAlert();
        }}
        style={{ progressSize: "large" }}
      />

    </View>
  );

  function onPressHandler(id) {
    let renderDatas = [...renderData];
    for (let data of renderDatas) {
      console.log("if " + data.id + " = " + id);
      if (data.id == id) {
        data.selected = (data.selected == null) ? true : !data.selected;
        break;
      }
    }
    setRenderData(renderDatas);
  };

  async function salvarTreinos() {
    showAlertButton();
    let renderDatas = [...renderData];
    let arraySalvar = [];
    for (let data of renderDatas) {
      if (data.selected == true) {
        arraySalvar.push(data.id);
      }
    }
    try {
      //Update em campo específico
      const docRef = doc(db, "Usuario", global.user);
      await updateDoc( docRef, {
        treinos: arraySalvar
      });
      global.reload = true;
      navigation.pop(2);
    } catch (error) {
      Alert.alert("Error: " + error);
    }
  };

  function showAlertButton() {
    setShowAlert(true);
  };

  function hideAlert() {
    setShowAlert(false);
  };
}