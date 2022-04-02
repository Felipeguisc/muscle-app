import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  containerMenus: {
    flex: 1,
    backgroundColor: "#1f1f2e",
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

  image: {
    height: 250,
    width: 250,
    marginBottom: 40,
  },

  imagePerfil: {
    height: 100,
    width: 100,
    marginLeft: 20,
  },

  imageMenu: {
    marginTop: 100,
    height: 200,
    width: 200,
    marginBottom: 40,
    backgroundColor: "white",
    borderRadius: 30,
  },

  inputView: {
    backgroundColor: "#eaeaec",
    borderRadius: 30,
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

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "#660036",//"#b3005f",//"#FF1493",
  },

  loginText: {
    fontWeight: "bold",
    color: "white"
  },

  contaText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 25
  },

  btnsView: {
    flex: 1,
    alignItems: "center",
    width: 900,
    borderBottomWidth: 5
  },

  btnText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white"
  },

  genericBtn: {
    width: "100%",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333",
  },

  genericBtnSelected: {
    width: "100%",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },

  roundButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#FF1493',
    marginTop: 10,
    marginBottom: 10,
    position: "absolute",
    bottom: 5,
    left: 100
  },

  floatButton: {
    width: "100%",
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000066',
    marginTop: 0,
    marginBottom: 0,
    bottom: 0
  },

  item: {
    width: 900,
  },

  title: {
    fontSize: 32,
    paddingTop: StatusBar.currentHeight,
    fontWeight: "bold",
    color: "white",
  },

  checkboxContainer: {
    marginTop: 50,
    flex: 1,
    width: "100%",
    height: 120,
  },
  checkbox: {
    
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 10,
    borderBottomColor: '#cccccc',
    backgroundColor: '#ffffff',
  },

  selectedRowStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 10,
    borderBottomColor: '#cccccc',
    backgroundColor: '#48486a'
  },

  labelStyle: {
    fontSize: 32
  }

});

export default styles;