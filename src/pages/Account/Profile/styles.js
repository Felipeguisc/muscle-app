import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  containerPerfil: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "flex-start",
    marginTop: StatusBar.currentHeight + 10,
    width: "80%",
  },

  containerInfoPerfil: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "center",
    marginTop: 15,
    width: "90%",
  },

  imagePerfil: {
    height: 100,
    width: 100,
    marginLeft: 20,
  },

  contaText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 25
  },

  inputView: {
    backgroundColor: "#eaeaec",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  inputEditingView: {
    backgroundColor: "#eaeaec",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
    textAlign: "center",
    width: "100%"
  },

  btn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "#660036",//"#b3005f",//"#FF1493",
  },

  btnText: {
    fontWeight: "bold",
    color: "white"
  },

});

export default styles;