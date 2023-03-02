import { StyleSheet } from "react-native";
import { COLORS } from "../constants/color";
import { moderateScale, normalize, verticalScale } from "../constants/metric";

export const Globalstyles = StyleSheet.create({
  sectionHeaderText: {
    fontWeight: "700",
    fontSize: normalize(18),
    textTransform: "uppercase",
    textAlign: "center",
    backgroundColor: COLORS.primary,
    color: "white",
  },
  section: {
    marginVertical: verticalScale(15),
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
    width: "80%",
    alignItems: "center",
  },
});

export const SPACING = {
  sectionPadding: moderateScale(15),
};
