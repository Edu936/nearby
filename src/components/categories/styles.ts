import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

export const styleCategories = StyleSheet.create({
    container: {
        top: 64,
        zIndex: 1,
        maxHeight: 36,
        position: "absolute",
    },
    content: {
        gap: 8,
        paddingHorizontal: 24,
    }
});