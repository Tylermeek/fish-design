import { PSize } from "../type/Button";

export const size = (size: PSize): string => {
  switch (size) {
    case "small":
      return "py-1 px-2";
    case "large":
      return "py-3 px-4";
    default:
      return "py-2 px-3";
  }
};

export const bgColor = ({
  color,
  plain,
  disabled,
}: {
  color: string;
  plain: boolean;
  disabled: boolean;
}): string => {
  if (/^([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(color)) {
    return `bg-${color.substring(1)}`;
  } else return `bg-${color}-${plain ? 100 : disabled ? 300 : 500}`;
};

export const round = (round: boolean): string =>
  `rounded-${round ? "full" : "lg"}`;

export const hoverBg = ({
  color,
  plain,
}: {
  color: string;
  plain: boolean;
}): string => `hover:bg-${color}-${plain ? 500 : 300}`;

export const cursor = (disabled: boolean) =>
  `cursor-${disabled ? "not-allowed" : "pointer"}`;

export const textColor = ({
  color,
  plain,
}: {
  color: string;
  plain: boolean;
}): string => {
  return `text-${plain ? color + "-500" : "white"}`;
};
