import clsx from "clsx";
import type { LinkType } from "./Link.common";
import NextLink from "next/link";

export const Link: LinkType = ({ href, className, children }) => {
  return (
    <NextLink href={href} className={clsx(className)}>
      {children}
    </NextLink>
  );
};
