import { Text, View } from "react-native";
import { styleStep } from "./styles";
import { IconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

type Step = {
    title: string,
    description: string,
    icon: React.ComponentType<IconProps>,
}

export function Step( { title, description, icon : Icon } : Step ) {
    return (
        <View style={styleStep.container}>
            {Icon && <Icon size={32} color={colors.red.base}></Icon>}
            <View style={styleStep.details}>
                <Text style={styleStep.title}>{title}</Text>
                <Text style={styleStep.description}>{description}</Text>
            </View>
        </View>
    );
}