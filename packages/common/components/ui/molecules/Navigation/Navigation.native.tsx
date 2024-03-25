import clsx from "clsx";
import { View, TouchableOpacity } from "react-native";
import { Icon } from "../../atoms/Icon/Icon.native";
import { Text } from "../../atoms/Text/Text.native";

import type { NavigationType } from "./Navigation.common";

export const Navigation: NavigationType = ({
  style,
  options,
  onChange,
  value,
  hideLabels,
}) => {
  const handleChange = (value: string, index: number) => () => {
    if (onChange) onChange(value, index);
  };

  return (
    <View
      className={clsx(
        "w-full bg-white border-t border-gray-100",
        "flex flex-row py-1"
      )}
      style={style}
    >
      {options.map((opt, index) => {
        const selected = value === opt.value;
        const optLabel = opt.label;
        return (
          <TouchableOpacity
            activeOpacity={0.5}
            key={opt.value}
            onPress={handleChange(opt.value, index)}
            className={clsx(
              "flex flex-column flex-1",
              "justify-center items-center"
            )}
          >
            {opt.icon && (
              <Icon
                name={opt.icon}
                size={24}
                className={clsx(
                  "self-center",
                  selected ? "text-primary" : "text-gray-400"
                )}
              />
            )}

            {opt.label && !hideLabels && (
              <Text
                bold
                className={clsx(
                  "text-[10px]",
                  selected ? "text-primary" : "text-gray-400"
                )}
              >
                {optLabel}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
