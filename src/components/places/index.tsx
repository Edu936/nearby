import { Text, useWindowDimensions } from "react-native";
import { PlaceProps, Place } from "../place";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { stylePlaces } from "./styles";
import { router } from "expo-router";

type Props = {
  data: PlaceProps[];
};

export function Places({ data }: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 265,
    max: dimensions.height - 215,
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      enableOverDrag={false}
      backgroundStyle={stylePlaces.container}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={stylePlaces.indicator}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={stylePlaces.content}
        renderItem={({ item }) => (
          <Place
            data={item}
            onPress={() => router.navigate(`/market/${item.id}`)}
          />
        )}
        ListHeaderComponent={() => (
          <Text style={stylePlaces.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}
