import type { FC, ReactElement, SVGProps } from "react";

export const ArrowDownIcon: FC<SVGProps<SVGElement>> = (
  props
): ReactElement => {
  return (
    <svg
      className={props.className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.46967 6.46967C3.76256 6.17678 4.23744 6.17678 4.53033 6.46967L8 9.93934L11.4697 6.46967C11.7626 6.17678 12.2374 6.17678 12.5303 6.46967C12.8232 6.76256 12.8232 7.23744 12.5303 7.53033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.46967 7.53033C3.17678 7.23744 3.17678 6.76256 3.46967 6.46967Z"
        fill="currentColor"
      />
    </svg>
  );
};
