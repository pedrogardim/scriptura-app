import clsx from "clsx";
import React from "react";
import { View, Platform, KeyboardAvoidingView } from "react-native";
import {
  SafeAreaView,
  type SafeAreaViewProps,
} from "react-native-safe-area-context";

export interface ContainerProps extends SafeAreaViewProps {
  safeArea?: "all" | "none" | "ios" | "android";
  padding?: boolean;
  avoidKeyboard?: boolean;
  style?: object[];
  className?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  safeArea = "all",
  avoidKeyboard = false,
  padding,
  style,
  children,
  ...props
}) => {
  const isSafeArea =
    safeArea === "all" ||
    (safeArea === "ios" && Platform.OS === "ios") ||
    (safeArea === "android" && Platform.OS === "android");

  const ViewComponent = isSafeArea ? SafeAreaView : View;
  const WrapperComponent = avoidKeyboard ? KeyboardAvoidingView : View;

  return (
    <WrapperComponent className="flex-1" behavior="padding">
      <ViewComponent
        style={style}
        className={clsx("flex-1", padding && "p-4")}
        {...props}
      >
        {children}
      </ViewComponent>
    </WrapperComponent>
  );
};
