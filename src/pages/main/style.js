import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "space-between"
  },
  cardsContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    maxHeight: 500
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    margin: 30,
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  avatar: {
    flex: 1,
    height: 300
  },
  footer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333"
  },
  bio: {
    fontSize: 14,
    color: "#999",
    marginTop: 2,
    lineHeight: 18
  },
  logo: {
    marginTop: 30
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 30
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    elevation: 2
  },
  empty: {
    fontSize: 30,
    alignSelf: "center",
    color: "#999",
    fontWeight: "bold"
  },
  matchConatiner: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center"
  },
  matchAvatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: "#fff",
    marginVertical: 30
  },
  matchName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff"
  },
  matchBio: {
    fontSize: 18,
    color: "rgba(255,255,255,0.8)",
    lineHeight: 24,
    textAlign: "center",
    paddingHorizontal: 30
  },
  matchClose: {
    fontSize: 18,
    color: "rgba(255,255,255,0.8)",
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center"
  }
});

export default styles;
