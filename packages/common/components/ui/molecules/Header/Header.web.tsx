import clsx from "clsx";

import type { HeaderType } from "./Header.common";
import { AppLogo } from "../../../web";

export const Header: HeaderType = () => {
  // const handleChange = (value: string, index: number) => () => {
  //   if (onChange) onChange(value, index);
  // };

  return (
    <header
      className={clsx(
        "hidden sm:flex items-center",
        "h-14 px-4 w-screen bg-white",
        "border-gray-200 border-b"
      )}
    >
      <AppLogo />
    </header>
  );
};
