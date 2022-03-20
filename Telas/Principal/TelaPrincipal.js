import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import styles from "../estilo";
import db from "../../Firebase";
import {
  collection, doc, getDoc,
} from 'firebase/firestore';
import AwesomeAlert from 'react-native-awesome-alerts';

global.reload = false;

export default function TelaPrincipal({ navigation, route }) {

  var data = route.params;

  var arrayTreinos = [];

  const [showAlert, setShowAlert] = useState(false);

  global.user = data.login;

  function showAlertButton() {
    setShowAlert(true);
  };

  function hideAlert() {
    setShowAlert(false);
  };

  return (
    <View style={styles.containerMenus}>

      <StatusBar style="auto" />

      <Text style={styles.title}>Bem vindo, {data.nome}!</Text>

      <TouchableOpacity style={styles.genericBtn}
        onPress={() => carregarTreinos()}>
        <Text style={styles.btnText}>TREINOS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.genericBtn}
        onPress={() => carregarContas()}>
        <Text style={styles.btnText}>CONTA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.genericBtn}
        onPress={() => Alert.alert("Tela não implementada")}>
        <Text style={styles.btnText}>CONFIGURAÇÃO</Text>
      </TouchableOpacity>

      <Image style={styles.imageMenu} source={require("../assets/logo-fitness.png")} />

      <AwesomeAlert
          show={showAlert}
          showProgress={true}
          title="Carregando..."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={false}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            hideAlert();
          }}
          onConfirmPressed={() => {
            hideAlert();
          }}
          onDismiss={() => {
            hideAlert();
          }}
          style={{progressSize:"large"}}
        />
    </View>
  );

  async function carregarContas() {
    showAlertButton();
    if(global.reload)
      await recarregarConta();
    navigation.push('TelaConta', data);
    hideAlert();
  }

  async function carregarTreinos() {
    showAlertButton();
    if(global.reload)
      await recarregarConta();
    if(data.treinos !== undefined)
      await readTreinos(data.treinos);
    hideAlert();
    navigation.push('TelaEscolherTreino', arrayTreinos)
  }

  async function readTreinos(treinos) {
    arrayTreinos = [];
    try {
      for (const treino of treinos) {
        //ler documento específico
        const docRef = doc(db, "Treino", treino);
        var docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          let treinoDb = {
            label: docSnap.data().nome,
            exercicios: docSnap.data().exercicios,
            value: docSnap.id
          }
          arrayTreinos.push(treinoDb);
        }
      }
    } catch (error) {
      Alert.alert("Error: " + error);
    }
  }

  async function recarregarConta() {
    console.log("Entrando recarregarConta");
    try {
      let acessou = false;
      //ler documento específico
      const docRef = doc(db, "Usuario", data.login);
      var docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        var usuario = {
          login: docSnap.id,
          senha: docSnap.data().senha,
          nome: docSnap.data().nome,
          treinos: docSnap.data().treinos,
          idade: docSnap.data().idade,
          altura: docSnap.data().altura,
          peso: docSnap.data().peso,
        }
        data = usuario;
        global.reload = false;
        acessou = true;
      }
      if(!acessou) {
        Alert.alert("Login ou senha incorretos!");
      }
    } catch (error) {
      Alert.alert("Error: " + error);
    }
  }

}