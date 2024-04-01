import { NavigationProps } from "../../ui/molecules/Navigation/Navigation.common";

export interface AppNavigationProps {}

export type AppNavigationType = React.FC<AppNavigationProps>;

export const navigationOptions: NavigationProps["options"] = [
  { value: "/home", label: "Home", icon: "home" },
  { value: "/bible", label: "Bible", icon: "book-cross" },
  { value: "/explore", label: "Explore", icon: "magnify" },
  { value: "/library", label: "Library", icon: "library" },
];
