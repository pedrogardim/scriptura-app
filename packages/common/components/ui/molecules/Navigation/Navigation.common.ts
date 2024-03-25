import { IconProps } from "../../atoms/Icon/Icon.common";

type Option = {
  value: string;
  label: string;
  icon?: IconProps["name"];
};

export interface NavigationProps {
  value?: string;
  options: Option[];
  hideLabels?: boolean;
  onChange?: (option: string, index: number) => void;
  style?: object;
  className?: string;
}

/**
 * Navigation component
 */
export type NavigationType = React.FC<NavigationProps>;
