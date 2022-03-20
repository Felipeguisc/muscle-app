import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "../estilo";
import db from "../../Firebase";
import {
  collection, getDocs,
} from 'firebase/firestore';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class TelaInicial extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", showAlert: false };
    this.state = { email: "felipegui", password: "123456", showAlert: false };
    //this.state = { email: "sarinha.lemos15@gmail.com", password: "1346", showAlert: false };
    //this.fazerLogin = this.fazerLogin.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/logo-fitness-2.png")} />

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
            placeholder="Senha"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(txt) => this.setState({ password: txt })}
            value={this.state.password}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('TelaCriarConta')}>
          <Text style={styles.forgot_button}>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}
          onPress={() => this.fazerLogin()}>
          <Text style={styles.loginText}>ENTRAR</Text>
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

  async fazerLogin() {
    this.setState({showAlert: true});
    try {
      let acessou = false;
      //ler todos os documentos da coleção
      const querySnapshot = await getDocs(collection(db, "Usuario"));
      querySnapshot.forEach((doc) => {
        var usuario = {
          login: doc.id,
          senha: doc.data().senha,
          nome: doc.data().nome,
          treinos: doc.data().treinos,
          idade: doc.data().idade,
          altura: doc.data().altura,
          peso: doc.data().peso,
        }

        if (usuario.login == this.state.email && usuario.senha == this.state.password) {
          this.props.navigation.push('TelaPrincipal', usuario);
          acessou = true;
        }
      });
      if(!acessou) {
        Alert.alert("Login ou senha incorretos!");
      }
    } catch (error) {
      Alert.alert("Error: " + error);
    }
    this.setState({showAlert: false});
  }

}