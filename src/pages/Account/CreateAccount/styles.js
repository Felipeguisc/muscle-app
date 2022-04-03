import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: 150,
    width: 150,
    marginBottom: 40,
  },

  inputView: {
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
    backgroundColor: "#660036",
  },

  btnText: {
    fontWeight: "bold",
    color: "white"
  },

});

export default styles;