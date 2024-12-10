import { Text, Pressable, PressableProps } from "react-native";
import { styleCategory } from "./styles";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors, fontFamily } from "@/styles/theme";

type Props = PressableProps & {
  name: string;
  iconId: string;
  isSelected?: boolean;
};

export function Category({ name, iconId, isSelected = false, ...rest }: Props) {
  const Icon = categoriesIcons[iconId];

  return (
    <Pressable
      style={[
        styleCategory.container,
        isSelected && styleCategory.containerSelected,
      ]}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text
        style={[styleCategory.name, isSelected && styleCategory.nameSelected]}
      >
        {name}
      </Text>
    </Pressable>
  );
}
