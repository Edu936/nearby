import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styleInfo = StyleSheet.create({
    container: {
        gap: 8,
        alignItems: "center",
        flexDirection: "row",
    },
    text: {
        flex: 1,
        fontSize: 14,
        lineHeight: 22.4,
        color: colors.gray[500],
        fontFamily: fontFamily.regular,
    }
})