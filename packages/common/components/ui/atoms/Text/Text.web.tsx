import clsx from "clsx";
import type { TextType } from "./Text.common";

export const Text: TextType = ({ className, children, bold }) => {
  return (
    <span className={clsx("font-sans", bold && "font-bold", className)}>
      {children}
    </span>
  );
};
