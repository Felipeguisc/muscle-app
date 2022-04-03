import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  btnsView: {
    flex: 1,
    borderRadius: 25,
    alignItems: "center",
    width: 400,
    paddingBottom: 10
  },

  genericBtn: {
    width: "100%",
    height: 120,
    borderRadius: 25,
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

  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
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

  item: {
    width: 900,
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