import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  imageContainer: {
    width: "100%",
    height: height / 3,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  orderContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
