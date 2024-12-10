import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const stylePlace = StyleSheet.create({
    container: {
        height: 120,
        width: "100%",
        padding: 8,
        borderWidth: 1,
        borderColor: colors.gray[200],
        borderRadius: 12,
        flexDirection: "row",
        gap: 16,
        alignItems: "center"
    },
    image: {
        width: 116,
        height: 104,
        borderRadius: 8,
        backgroundColor: colors.gray[200],
    },
    content: {
        flex: 1,
        gap: 4, 
    },
    name: {
        fontSize: 16,
        fontFamily: fontFamily.medium,
        color: colors.gray[600]
    }, 
    description: {
        fontSize: 15,
        fontFamily: fontFamily.regular,
        color: colors.gray[500]
    },
    footer: {
        flexDirection: "row",
        gap: 7,
        marginTop: 10,
    },
    tickets: {
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[400]
    }
})