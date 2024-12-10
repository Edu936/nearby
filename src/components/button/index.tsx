import { styleButton } from "./styles";
import { colors, fontFamily } from "@/styles/theme";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import {
  Text,
  TextProps,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.6}
      disabled={isLoading}
      style={[styleButton.container, style]}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={styleButton.title}>{children}</Text>;
}

type IconProps = {
  icon: React.ComponentType<TablerIconProps>;
};

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]}></Icon>;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
