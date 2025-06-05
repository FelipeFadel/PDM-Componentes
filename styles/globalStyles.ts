import { StyleSheet } from "react-native";

const theme = {
  primaryColor: "#07020D",
  defaultRadius: 12,
  defaultRadiusLess: 8,
  defaultBlack: "#07020D",
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9C80E",
  },
  box: {
    width: "85%",
    height: "auto",
    padding: 20,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: theme.defaultRadius,
    borderWidth: 1,
    borderColor: theme.defaultBlack,
    gap: 12,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 4,
    color: theme.primaryColor,
  },
  titleColletion: {
    paddingVertical: 20,
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 4,
  },
  input: {
    height: 32,
    borderWidth: 1,
    padding: 4,
    borderColor: theme.defaultBlack,
    borderRadius: theme.defaultRadiusLess,
    width: "80%",
    marginTop: 12,
  },
  button: {
    height: 32,
    padding: 4,
    width: "80%",
    backgroundColor: theme.defaultBlack,
    borderRadius: theme.defaultRadiusLess,
    borderWidth: 1,
    borderColor: theme.defaultBlack,
    borderBottomWidth: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  buttonCollection: {
    width: "50%",
    borderRadius: theme.defaultRadiusLess,
    marginHorizontal: 4,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.defaultBlack,
    borderBottomWidth: 2,
  },
});

export default globalStyles;
