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

export default function TelaGerenciarTreino({ navigation, route }) {

  const data = route.params;

  const [renderData, setRenderData] = useState(data[0]);

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
    <View style={styles.containerMenus}>

      <StatusBar style="auto" />

      <Text style={styles.title}>Selecione os treinos que dejesa na sua conta</Text>

      <View style={styles.btnsView}>
        <FlatList
          data={renderData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}
        onPress={() => salvarTreinos()}>
        <Text style={styles.loginText}>Salvar Treinos</Text>
      </TouchableOpacity>

    </View>
  );

  function onPressHandler(id) {
    console.log("ON PRESS HANDLER");
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
    console.log("Entrando salvarTreinos");
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

}