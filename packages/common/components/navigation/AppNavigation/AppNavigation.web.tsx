import clsx from "clsx";
import { Navigation } from "../../ui/molecules/Navigation/Navigation.web";
import { AppNavigationType, navigationOptions } from "./AppNavigation.common";

export const AppNavigation: AppNavigationType = ({}) => {
  return <Navigation options={navigationOptions} className={clsx("")} />;
};
