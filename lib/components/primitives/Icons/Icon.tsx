// src/components/Icon.tsx
import React from "react";
import * as Icons from "@radix-ui/react-icons";

export type IconName = keyof typeof Icons;

export type IconSkin =
  | "primary"
  | "success"
  | "error"
  | "info"
  | "warning"
  | "light"
  | "dark"
  | "neutral";

export interface IconProps {
  name: IconName;
  size?: number;
  skin?: IconSkin;
  className?: string;
}

const skinColors: Record<IconSkin, string> = {
  primary: "var(--colors-primary-custom-9)",
  success: "var(--colors-semantic-success-9)",
  error: "var(--colors-semantic-error-9)",
  info: "var(--colors-semantic-info-9)",
  warning: "var(--colors-semantic-warning-9)",
  light: "var(--colors-default-white)",
  dark: "var(--colors-default-black)",
  neutral: "var(--colors-neutral-neutral-9)",
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 25,
  skin = "neutral",
  className,
}) => {
  const IconComponent = Icons[name];

  return (
    <IconComponent
      style={{
        width: size,
        height: size,
        color: skinColors[skin],
        fill: skinColors[skin],
      }}
      className={className}
    />
  );
};
