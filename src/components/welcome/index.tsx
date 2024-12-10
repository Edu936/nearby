import { styleWelcome } from "./styles";
import { Image, Text, View } from "react-native";

export function Welcome() {
    return (
        <View>
            <Image source={require("@/assets/logo.png")} style={ styleWelcome.logo } />
            <Text style={ styleWelcome.title }>Boas vindas ao Nearby!</Text>
            <Text style={ styleWelcome.subTitle}> 
                Tenha cupons de vantagem para usar em {"\n"} seus estabelecimentos favoritos.
            </Text>
        </View>
    )
}