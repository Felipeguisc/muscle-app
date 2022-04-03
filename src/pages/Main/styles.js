import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#1f1f2e",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 32,
    paddingTop: StatusBar.currentHeight,
    fontWeight: "bold",
    color: "black",
  },
/*
  genericBtn: {
    width: "100%",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333",
  },

  btnText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white"
  },
*/
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


  image: {
    marginTop: 100,
    height: 200,
    width: 200,
    marginBottom: 40,
    backgroundColor: "white",
    borderRadius: 100,
  },


});

export default styles;