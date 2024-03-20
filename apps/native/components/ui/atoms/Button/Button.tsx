import { Button as ReactNativeButton } from "react-native";
import type { ButtonType } from "@repo/common/components";

export const Button: ButtonType = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  return <ReactNativeButton title={label} className="bg-red-500" {...props} />;
};

export { ButtonType };
