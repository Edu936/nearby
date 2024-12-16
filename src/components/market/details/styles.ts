import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styleDetails = StyleSheet.create({
    container: {
        padding: 32,
        paddingBottom: 0,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        backgroundColor: colors.gray[100],
    },
    name: {
        fontSize: 20,
        color: colors.gray[600],
        fontFamily: fontFamily.bold,
    },
    description: {
        fontSize: 16,
        marginTop: 12,
        lineHeight: 22,
        marginBottom: 32,
        color: colors.gray[500],
        fontFamily: fontFamily.regular,
    },
    group: {
        padding: 16,
        width: "100%",
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[200],
    },
    title: {
        fontSize: 14,
        marginBottom: 12,
        color: colors.gray[500],
        fontFamily: fontFamily.medium,
    },
    rule: {

    }
})