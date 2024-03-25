import clsx from "clsx";
import { Link as ExpoLink } from "expo-router";

import type { LinkType } from "./Link.common";

export const Link: LinkType = ({ style, children, href }) => {
  return (
    <ExpoLink href={href} style={style}>
      {children}
    </ExpoLink>
  );
};
