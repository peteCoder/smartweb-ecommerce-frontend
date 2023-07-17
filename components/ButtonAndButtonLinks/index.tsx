import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  bgColor: string;
  textColor: string;
  href?: string;
}

export const Button = ({
  children,
  fullWidth,
  bgColor,
  textColor,
  href,
  ...restButtonProps
}: ButtonProps) => {
  if (href) {
    return (
      <Link
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
        href={href}
        className={clsx("")}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      {...restButtonProps}
      className={clsx("", fullWidth && "w-full", )}
    >
      {children}
    </button>
  );
};
