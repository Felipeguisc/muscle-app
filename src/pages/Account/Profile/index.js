import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  Image,
} from "react-native";
import styles from "./styles";
import db from "../../../../Firebase";
import {
  collection, doc, updateDoc,
} from 'firebase/firestore';
import AwesomeAlert from 'react-native-awesome-alerts';


export default function TelaConta({ navigation, route }) {

  const data = route.params;

  console.log(data);

  const [idade, setIdade] = useState(data.idade!=undefined ? data.idade.toString() : "");
  const [altura, setAltura] = useState(data.altura!=undefined ? data.altura.toString() : "cm");
  const [peso, setPeso] = useState(data.peso!=undefined ? data.peso.toString() : "kg");
  const [telefone, setTelefone] = useState(data.telefone!=undefined ? data.telefone.toString() : "");

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.containerPerfil}>

      <Image style={styles.imagePerfil} source={require("../../../assets/images/account.png")} />
        <View style={{marginLeft: 20}}>
          <Text style={styles.contaText}>{data.nome}</Text>
          <Text>{data.login}</Text>
        </View>

      </View>

      <View style={styles.containerInfoPerfil}>

        <Text>Idade</Text>
        <View style={styles.inputView}>

          <TextInput
            style={styles.TextInput}
            keyboardType="numeric"
            placeholder={idade}
            placeholderTextColor="#003f5c"
            onChangeText={(txt) => setIdade(txt)}
            value={idade}
            maxLength={2}
          />
        </View>

        <Text>Altura</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            keyboardType="numeric"
            placeholder={altura}
            placeholderTextColor="#003f5c"
            onChangeText={(txt) => setAltura(txt)}
            value={altura}
            maxLength={3}
          />
        </View>

        <Text>Peso</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            keyboardType="numeric"
            placeholder={peso}
            placeholderTextColor="#003f5c"
            onChangeText={(txt) => setPeso(txt)}
            value={peso}
            maxLength={3}
          />
        </View>

        <Text>Telefone</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            keyboardType="numeric"
            placeholder={telefone}
            placeholderTextColor="#003f5c"
            onChangeText={(txt) => setTelefone(txt)}
            value={telefone}
            //mask="([00]) [0] [0000]-[0000]"
          />
        </View>

      </View>

      <TouchableOpacity style={styles.loginBtn}
        onPress={() => salvarConta()}>
        <Text style={styles.loginText}>Salvar Alterações</Text>
      </TouchableOpacity>

    </View>
  );

  async function salvarConta() {
    console.log("Entrando salvarConta");
    try {
      //Update em campo específico
      const docRef = doc(db, "Usuario", global.user);
      await updateDoc( docRef, {
        idade: idade,
        altura: altura,
        peso: peso,
        telefone: telefone,
      });
      global.reload = true;
      Alert.alert("Alterações salvas com sucesso!!!");
      navigation.pop();
    } catch (error) {
      Alert.alert("Error: " + error);
    }
  };

}