import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const stylePlaces = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[100],
    }, 
    content: {
        gap: 12,
        padding: 24,
        paddingBottom: 100,
    }, 
    indicator: {
        width: 80,
        height: 4,
        backgroundColor: colors.gray[300],
    },
    title: {
        fontSize: 16,
        marginBottom: 16,
        color: colors.gray[600],
        fontFamily: fontFamily.regular,
    },
})