import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: 250,
    width: 250,
    marginBottom: 40,
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

});

export default styles;