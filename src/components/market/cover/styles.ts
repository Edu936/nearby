import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styleCover = StyleSheet.create({
    container: {
        width: "100%",
        height: 232,
        marginBottom: -32,
        backgroundColor: colors.gray[200],
    },
    header: {
        padding: 24,
        paddingTop: 56,
    }
})