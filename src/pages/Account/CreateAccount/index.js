import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput
} from "react-native";
import styles from "./styles";
import db from "../../../../Firebase";
import {
  collection, doc, setDoc,
} from 'firebase/firestore';
import AwesomeAlert from 'react-native-awesome-alerts';


export default class TelaCriarConta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", nome: "", senha: "", showAlert: false};
    this.criarConta = this.criarConta.bind(this);
  }

  async criarConta(){
    this.setState({showAlert:true});
    try {
      //Criar documento com id específico
      await setDoc(doc(db, "Usuario", this.state.email), {
        nome: this.state.nome,
        senha: this.state.senha,
      });

      Alert.alert("Salvo com sucesso!");

      this.setState({email: "", nome: "", senha: "", showAlert: false});
      this.props.navigation.goBack();
    } catch (error) {
      Alert.alert(error);
    }
    this.setState({showAlert:false});
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(txt) => this.setState({ email: txt })}
            value={this.state.email}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Nome"
            placeholderTextColor="#003f5c"
            onChangeText={(txt) => this.setState({ nome: txt })}
            value={this.state.nome}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(txt) => this.setState({ senha: txt })}
            value={this.state.password}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn}
          onPress={() => this.criarConta()}>
          <Text style={styles.loginText}>Criar conta</Text>
        </TouchableOpacity>

        <AwesomeAlert
          show={this.state.showAlert}
          showProgress={true}
          title="Carregando..."
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          style={{progressSize:"large"}}
        />

      </View>
    );
  }

}