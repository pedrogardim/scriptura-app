import { CSSProperties } from "react";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { Icon as VectorIconsIconType } from "@expo/vector-icons/build/createIconSet";

type ExtractIconType<T> =
  T extends VectorIconsIconType<infer U, any> ? U : never;

export type MaterialIconType = ExtractIconType<typeof MaterialCommunityIcon>;

export type AllowedIcons = "book-cross" | "magnify" | "library";

export interface IconProps {
  name: AllowedIcons;
  size?: number;
  style?: object[];
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export type IconType = React.FC<IconProps>;
