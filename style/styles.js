import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    flexDirection: 'row', 
    elevation: 3, 
    paddingHorizontal: 20, 
    display: 'flex', 
    alignItems: 'center', 
    width: '100%',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  shadowGreen: {
    shadowColor: "#19918f",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.75,
    shadowRadius: 10,
  },

  imgLogo: {
    borderRadius: 100,
    width: 70,
    height: 70,
  },

  textMorning: {
    fontWeight: "700",
    fontSize: 25,
    marginBottom: 20
  },

  textHi: {
    fontSize: 16,
  },
  buttonHijo: {
    backgroundColor: "#19918f",
    borderRadius: 10,
  },

  whiteText: {
    color: "white",
    fontWeight: "400",
    fontSize: 16
  },

  plainText: {
    color: "black",
    fontWeight: "400",
    fontSize: 16
  },

  themeToggle: {
    width: 20,
    height: 20,
  },

  textCard: {
    margin: 10,
  },

  accName: {
    fontWeight: "700",
    marginBottom: 3,
  },

  headerText: {
    fontSize: 30,
    fontStyle: "normal",
  },

  buttonContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 5,
  },
  touchableContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 5,
    marginVertical: 5,
  },
  loremText: {
    marginVertical: 10,
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
  },
  imageBackground: {
    flex: 1,
    marginTop: 20,
  },
  imageText: {
    marginTop: 20,
    color: "red",
    padding: 10,
  },
});

export default styles;
