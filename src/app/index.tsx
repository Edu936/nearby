import { View, Text } from "react-native";
import { Steps } from "@/components/steps";
import { Button } from "@/components/button";
import { router, Router } from "expo-router";
import { Welcome } from "@/components/welcome";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Steps />
      <Button onPress={() => router.navigate("/home")}>
        <Button.Title> Começar </Button.Title>
      </Button>
    </View>
  );
}
