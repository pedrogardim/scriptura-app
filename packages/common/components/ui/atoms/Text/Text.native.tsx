import clsx from "clsx";
import { Text as RNText } from "react-native";

import type { TextType } from "./Text.common";

export const Text: TextType = ({ style, children, bold }) => {
  return (
    <RNText
      className={clsx(bold ? "font-sans-bold" : "font-sans")}
      style={style}
    >
      {children}
    </RNText>
  );
};
