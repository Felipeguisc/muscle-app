import React from "react";
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './src/pages/Login/index.js';
import TelaPrincipal from './src/pages/Main/index.js';
import TelaEscolherTreino from './src/pages/Workout/SelectWorkouts/index.js';
import TelaTreino from './src/pages/Workout/Workout/index.js';
import TelaGerenciarTreino from './src/pages/Workout/ManageWorkouts/index.js';
import TelaConta from './src/pages/Account/Profile/index.js';
import TelaCriarConta from './src/pages/Account/CreateAccount/index.js';
import firebase from './Firebase';

const Stack = createStackNavigator();

LogBox.ignoreAllLogs();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaLogin">
          <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ headerShown: false }} />
          <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{ headerShown: false }} />
          <Stack.Screen name="TelaConta" component={TelaConta} options={{ headerShown: false }} />
          <Stack.Screen name="TelaCriarConta" component={TelaCriarConta} options={{ title: "Crie sua conta" }} />
          <Stack.Screen name="TelaEscolherTreino" component={TelaEscolherTreino} options={{ title: "Treinos disponíveis" }} />
          <Stack.Screen name="TelaTreino" component={TelaTreino} options={{ title: "Treino" }} />
          <Stack.Screen name="TelaGerenciarTreino" component={TelaGerenciarTreino} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
