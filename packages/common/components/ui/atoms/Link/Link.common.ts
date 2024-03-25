import type { ReactNode } from "react";

export interface LinkProps {
  children: ReactNode;
  href: string;
  style?: object[];
  className?: string;
}

/**
 * Link component
 */
export type LinkType = React.FC<LinkProps>;
