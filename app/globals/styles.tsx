import { StyleSheet } from "react-native";
import { COLORS } from "../constants/color";

export const Globalstyles = StyleSheet.create({
  sectionHeaderText: {
    fontWeight: "700",
    fontSize: 18,
    textTransform: "uppercase",
    textAlign: "center",
    backgroundColor: COLORS.primary,
    color: "white",
  },
  section: {
    marginVertical: 15,
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
});

export const SPACING = {
  sectionPadding: 15,
};
