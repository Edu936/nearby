import { FlatList } from "react-native";
import { Category } from "../category";
import { styleCategories } from "./styles";

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
  selected: string;
  onSelect: (id: string) => void;
};

export function Categories({ data, selected, onSelect }: Props) {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      style={styleCategories.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styleCategories.content}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => onSelect(item.id)}
          isSelected={item.id === selected}
        />
      )}
    />
  );
}
