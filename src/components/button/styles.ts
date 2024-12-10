import { StyleSheet, TextInput } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styleButton = StyleSheet.create({
    container: {
        gap: 14,
        height: 56,
        maxHeight: 56,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: colors.green.base,
    },
    title:{
        fontSize: 18,
        color: colors.gray[100],
        fontFamily: fontFamily.semiBold,
    },
});