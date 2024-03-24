import type { ButtonType } from "./Button.common";

export const Button: ButtonType = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <button type="button" className="bg-red-500" {...props}>
      {label}
    </button>
  );
};

export { ButtonType };
