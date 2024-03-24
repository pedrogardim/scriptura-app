import { TouchableOpacity, Text } from "react-native";
import type { ButtonType } from "./Button.common";

export const Button: ButtonType = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <TouchableOpacity className="bg-red-500">
      <Text className="text-white">{label}</Text>
    </TouchableOpacity>
  );
};

export { ButtonType };
