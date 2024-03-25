import type { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  bold?: boolean;
  style?: object[];
  className?: string;
}

/**
 * text component
 */
export type TextType = React.FC<TextProps>;
