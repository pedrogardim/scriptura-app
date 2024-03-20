import { TouchableOpacity, Text } from "react-native";
import type { ButtonType } from "@repo/common/components";

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
