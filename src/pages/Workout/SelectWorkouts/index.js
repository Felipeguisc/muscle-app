import { StatusBar } from "expo-status-bar";
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
  collection, doc, getDoc, getDocs
} from 'firebase/firestore';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function TelaEscolherTreino({ navigation, route }) {

  const arrayTreinos = route.params;

  var arrayExercicios = [];

  var arrayTodosTreinos = [];

  const [showAlert, setShowAlert] = useState(false);

  function showAlertButton() {
    setShowAlert(true);
  };

  function hideAlert() {
    setShowAlert(false);
  };

  const Item = ({ title }) => (
    <View style={styles.btnsView}>
      <TouchableOpacity style={styles.genericBtn}
        onPress={() => carregarExercicios(title)}>
        <Text style={styles.btnText}>{title.label}</Text>
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
          data={arrayTreinos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View>
        <TouchableOpacity style={styles.roundButton}
          onPress={() => carregarTodosTreinos()}>
          <Text style={{ fontSize: 50 }}>+</Text>
        </TouchableOpacity>
      </View>

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

  async function carregarExercicios(treino) {
    showAlertButton();
    await readExercicios(treino);
    navigation.push('TelaTreino', arrayExercicios);
    hideAlert();
  }

  async function readExercicios(treino) {
    arrayExercicios = [];
    try {
      if (treino != null) {
        for (const exercicio of treino.exercicios) {
          //ler documento específico
          const docRef = doc(db, "Exercicio", exercicio.id);
          var docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            let treinoDb = {
              label: docSnap.data().nome,
              value: docSnap.id,
              series: exercicio.series,
              repeticoes: exercicio.repeticao
            }
            arrayExercicios.push(treinoDb);
          }
        }
      }
      else {
        console.log("Carregando todos os treinos");
        arrayTodosTreinos = [];
        //ler todos os documentos da coleção
        const querySnapshot = await getDocs(collection(db, "Treino"));
        querySnapshot.forEach((doc) => {
          var treinoDb = {
            id: doc.id,
            criadopor: doc.data().criadopor,
            descricao: doc.data().descricao,
            nome: doc.data().nome,
          }
          arrayTodosTreinos.push(treinoDb);
        });
      }

    } catch (error) {
      Alert.alert("Error: " + error);
    }
  }

  async function carregarTodosTreinos() {
    showAlertButton();
    await readExercicios(null);
    navigation.push('TelaGerenciarTreino', new Array ( arrayTodosTreinos, arrayTreinos ));
    hideAlert();
  }
}