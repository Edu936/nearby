import { router } from "expo-router";
import { styleCover } from "./styles";
import { View, ImageBackground } from "react-native";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { Button } from "@/components/button";

type Props = {
    uri: string;
}

export function Cover({ uri }: Props) {
    return (
        <ImageBackground source={{uri}} style={styleCover.container}>
            <View style={styleCover.header}>
                <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
                    <Button.Icon icon={IconArrowLeft} />
                </Button>
            </View>
        </ImageBackground>
    )
}