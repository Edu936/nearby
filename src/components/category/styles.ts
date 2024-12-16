import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styleCategory = StyleSheet.create({
    container: {
        gap: 10,
        height: 36,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        color: colors.gray[100],
        justifyContent: "center",
        borderColor: colors.gray[300],
        backgroundColor: colors.gray[100]
    },
    name: {
        fontSize: 14,
        color: colors.gray[500],
        fontFamily: fontFamily.regular
    },
    containerSelected: {
        borderWidth: 1,
        borderColor: colors.green.base,
        backgroundColor: colors.green.base,
    },
    nameSelected: {
        color: colors.gray[100],
    },
})