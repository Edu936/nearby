import { stylePlace } from "./styles";
import { colors } from "@/styles/theme";
import { IconTicket } from "@tabler/icons-react-native";
import { Text, Image, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

export type PlaceProps = {
    id: string,
    name: string,
    description: string,
    coupons: string,
    cover: string,
    address: string,
}

export type Props = TouchableOpacityProps & {
    data: PlaceProps
}

export function Place({ data , ...rest}: Props) {
    return (
        <TouchableOpacity style={stylePlace.container} {...rest}>
            <Image style={stylePlace.image} source={{ uri: data.cover}}/>
            <View style={stylePlace.content}>
                <Text style={stylePlace.name}>{data.name}</Text>
                <Text style={stylePlace.description}>{data.description}</Text>
                <View style={stylePlace.footer}>
                    <IconTicket size={16} color={colors.red.base}></IconTicket>
                    <Text style={stylePlace.tickets}>{data.coupons} cupons disponíveis</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}