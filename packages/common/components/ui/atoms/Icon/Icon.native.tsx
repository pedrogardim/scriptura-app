import type { IconType } from "./Icon.common";

import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";

export const Icon: IconType = ({ style, name }) => {
  const defaultStyles = {
    fontSize: 24,
    color: "white",
  };
  const parsedStyle = {
    ...defaultStyles,
    ...(style &&
      (style.flat(Infinity) as object[]).reduce((a, b) => ({ ...a, ...b }))),
  };

  return <MaterialCommunityIcon name={name} style={parsedStyle} />;
};
