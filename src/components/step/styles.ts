import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styleStep = StyleSheet.create({
    container: {
        gap: 20,
        width: "100%",
        flexDirection: "row",
    },
    details: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        color: colors.gray[600],
        fontFamily: fontFamily.semiBold,
    },
    description: {
        fontSize: 16,
        marginTop: 4,
        color: colors.gray[500],
        fontFamily: fontFamily.regular,
    }
})