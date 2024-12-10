import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styleWelcome = StyleSheet.create({
    logo: {
        width: 48,
        height: 48,
        marginTop: 24,
        marginBottom: 28,
    },
    title: {
        fontSize: 30,
        color: colors.gray[600],
        fontFamily: fontFamily.bold,
    },
    subTitle: {
        fontSize: 20,
        marginTop: 12,
        color: colors.gray[500],
        fontFamily: fontFamily.regular,
    }
});