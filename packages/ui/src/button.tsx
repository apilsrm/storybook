import classNames from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "warning";
  size?: "small" | "medium" | "big";
  outline?: boolean;
}

export function Button({
  children,
  variant = "default",
  type = "submit",
  size = "small",
  outline = false,
  ...other
}: ButtonProps): JSX.Element {
  return (
    <button
      className={classNames("ui-rounded-xl", {
        "ui-text-white ui-bg-blue-500 disabled:ui-bg-blue-300 hover:ui-bg-blue-600 focus:ui-bg-blue-700":
          variant == "default" && !outline,
        "ui-bg-white ui-border-2 ui-border-blue-500 disabled:ui-bg-transparent disabled:ui-border-blue-400 disabled:ui-text-blue-300 hover:ui-bg-blue-50 focus:ui-bg-blue-200":
          variant == "default" && outline,
        "ui-bg-red-300 ui-text-white disabled:ui-bg-red-100 hover:ui-bg-red-400 focus:ui-bg-red-500":
          variant == "warning" && !outline,
        "ui-bg-transparent ui-border-2 disabled:ui-bg-transparent disabled:ui-border-red-100 ui-border-red-500 hover:ui-bg-red-100 focus:ui-bg-red-200":
          variant == "warning" && outline,
        "ui-py-1.5 ui-px-4 ui-text-sm": size == "small",
        "ui-py-2 ui-px-4 ui-text-base": size == "medium",
        "ui-py-2.5 ui-px-4 ui-text-3xl": size == "big",
      })}
      type={type}
      {...other}
    >
      {children}
    </button>
  );
}
