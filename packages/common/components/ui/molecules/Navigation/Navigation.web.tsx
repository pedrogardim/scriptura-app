import clsx from "clsx";
import Link from "next/link";
import { Icon } from "../../atoms/Icon/Icon.web";
import { Text } from "../../atoms/Text/Text.web";

import type { NavigationType } from "./Navigation.common";

export const Navigation: NavigationType = ({
  style,
  options,
  onChange,
  value,
  hideLabels,
}) => {
  // const handleChange = (value: string, index: number) => () => {
  //   if (onChange) onChange(value, index);
  // };

  return (
    <nav
      className={clsx(
        "flex flex-row py-1 sm:flex-col",
        "bg-white border-t border-gray-200 sm:border-r sm:border-t-0",
        "w-full sm:w-fit",
        "sm:gap-2 sm:py-3 sm:px-4 sm:min-w-40",
        "order-1 sm:order-none"
      )}
      style={style}
    >
      {options.map((opt, index) => {
        const selected = value === opt.value;
        const optLabel = opt.label;
        return (
          <Link
            key={opt.value}
            href={opt.value}
            // onPress={handleChange(opt.value, index)}
            className={clsx("flex-1 sm:flex-none")}
          >
            <div
              className={clsx(
                "hover:bg-gray-100 rounded-lg",
                "flex flex-1 ",
                "flex-col sm:flex-row",
                "justify-center sm:justify-start items-center",
                "sm:gap-2 sm:px-2 sm:py-1"
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
                    "text-[10px] sm:text-md",
                    selected ? "text-primary" : "text-gray-400"
                  )}
                >
                  {optLabel}
                </Text>
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
};
