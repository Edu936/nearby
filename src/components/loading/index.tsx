import { colors } from "@/styles/theme";
import { styleLoading } from "./styles";
import { ActivityIndicator } from "react-native";

export function Loading() {
    return (
        <ActivityIndicator 
            color={colors.green.base} 
            style={styleLoading.container} 
        />
    )
}