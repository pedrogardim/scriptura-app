import type { IconType, AllowedIcons } from "./Icon.common";
import MDIcon from "@mdi/react";
import { mdiBookCross, mdiMagnify, mdiLibraryOutline } from "@mdi/js";

const icons: { [key in AllowedIcons]: string } = {
  "book-cross": mdiBookCross,
  magnify: mdiMagnify,
  library: mdiLibraryOutline,
};

export const Icon: IconType = ({ size = 32, className, name }) => {
  return (
    <MDIcon
      className={className}
      style={{ height: size, width: size }}
      path={icons[name]}
    />
  );
};
