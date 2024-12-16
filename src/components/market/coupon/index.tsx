import { View, Text } from "react-native";
import { styleCoupon } from "./styles";
import { IconTicket } from "@tabler/icons-react-native";
import { colors, fontFamily } from "@/styles/theme";

type Props = {
  code: string;
};

export function Coupon({ code }: Props) {
  return (
    <View style={styleCoupon.container}>
        <Text style={styleCoupon.title}>Utilize esse cupom</Text>
        <View style={styleCoupon.content}>
            <IconTicket size={24} color={colors.green.light} />
            <Text style={styleCoupon.code}>{code}</Text>
        </View>
    </View>
  )
}
