import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styleSteps = StyleSheet.create({
    container: {
        gap: 24,
        flex: 1,
    },
    title: {
        fontSize: 20,
        color: colors.gray[500],
        fontFamily: fontFamily.regular,
    }
});