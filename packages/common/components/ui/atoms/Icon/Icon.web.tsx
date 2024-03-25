import type { IconType, AllowedIcons } from "./Icon.common";
import clsx from "clsx";
import MDIcon from "@mdi/react";
import {
  mdiBookCross,
  mdiMagnify,
  mdiLibraryOutline,
  mdiHome,
  mdiLibraryShelves,
} from "@mdi/js";

const icons: { [key in AllowedIcons]: string } = {
  "book-cross": mdiBookCross,
  magnify: mdiMagnify,
  library: mdiLibraryOutline,
  home: mdiHome,
  "library-shelves": mdiLibraryShelves,
};

export const Icon: IconType = ({ size, className, name }) => {
  return (
    <MDIcon
      className={clsx("h-6 w-6", className)}
      style={size ? { height: size, width: size } : {}}
      path={icons[name]}
    />
  );
};
