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
  doc, updateDoc,
} from 'firebase/firestore';
import { TextInputMask } from 'react-native-masked-text';


export default function TelaConta({ navigation, route }) {

  const data = route.params;

  console.log(data);

  const [birthdate, setBirthdate] = useState(data.birthdate != undefined ? data.birthdate.toString() : "");
  const [altura, setAltura] = useState(data.altura != undefined ? data.altura.toString() : "cm");
  const [peso, setPeso] = useState(data.peso != undefined ? data.peso.toString() : "kg");
  const [telefone, setTelefone] = useState(data.telefone != undefined ? data.telefone.toString() : "");
  const [edit, setEdit] = useState(false);

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.containerPerfil}>

        <Image style={styles.imagePerfil} source={require("../../../assets/images/account.png")} />
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.contaText}>{data.nome}</Text>
          <Text>{data.login}</Text>
        </View>

      </View>

      <View style={styles.containerInfoPerfil}>

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
            editable={edit}
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
            editable={edit}
          />
        </View>

        <Text>Telefone</Text>
        <View style={styles.inputView}>
          <TextInputMask
            type="cel-phone"
            style={styles.TextInput}
            keyboardType="numeric"
            placeholder={telefone}
            placeholderTextColor="#003f5c"
            onChangeText={(txt) => setTelefone(txt)}
            value={telefone}
            editable={edit}
          />
        </View>

        <Text>Data de nascimento</Text>
        <View style={styles.inputView}>
          <TextInputMask
            type="datetime"
            options={{
              format: 'DD/MM/YYYY'
            }}
            style={edit ? styles.TextInput : styles.inputEditingView}
            keyboardType="numeric"
            placeholder={birthdate}
            placeholderTextColor="#003f5c"
            onChangeText={(txt) => setBirthdate(txt)}
            value={birthdate}
            editable={edit}
          />
        </View>

      </View>

      { !edit && 
      <TouchableOpacity style={styles.btn}
        onPress={() => editAccount()}>
        <Text style={styles.btnText}>Editar</Text>
      </TouchableOpacity>
      }
      <TouchableOpacity style={styles.btn}
        onPress={() => salvarConta()}>
        <Text style={styles.btnText}>Salvar Alterações</Text>
      </TouchableOpacity>

    </View>
  );

  async function salvarConta() {
    try {
      //Update em campo específico
      const docRef = doc(db, "Usuario", global.user);
      await updateDoc(docRef, {
        birthdate: birthdate,
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

  function editAccount() {
    setEdit(edit ? false : true);
  }

}