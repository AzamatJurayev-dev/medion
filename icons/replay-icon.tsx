import type { FC, ReactElement, SVGProps } from "react";

export const ReplayIcon: FC<SVGProps<SVGElement>> = (props): ReactElement => {
  return (
    <svg
      className={props.className}
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_3869_65083)">
        <rect
          x="15"
          y="15"
          width="36"
          height="36"
          rx="18"
          fill="white"
          shape-rendering="crispEdges"
        />
        <path
          d="M25.6996 38.7C24.6996 37.6 24.0996 36.4 24.0996 34.4C24.0996 30.9 26.5996 27.8 30.0996 26.2L30.9996 27.5C27.6996 29.3 26.9996 31.6 26.7996 33.1C27.2996 32.8 27.9996 32.7 28.6996 32.8C30.4996 33 31.8996 34.4 31.8996 36.3C31.8996 37.2 31.4996 38.1 30.8996 38.8C30.1996 39.5 29.3996 39.8 28.3996 39.8C27.2996 39.8 26.2996 39.3 25.6996 38.7ZM35.6996 38.7C34.6996 37.6 34.0996 36.4 34.0996 34.4C34.0996 30.9 36.5996 27.8 40.0996 26.2L40.9996 27.5C37.6996 29.3 36.9996 31.6 36.7996 33.1C37.2996 32.8 37.9996 32.7 38.6996 32.8C40.4996 33 41.8996 34.4 41.8996 36.3C41.8996 37.2 41.4996 38.1 40.8996 38.8C40.2996 39.5 39.3996 39.8 38.3996 39.8C37.2996 39.8 36.2996 39.3 35.6996 38.7Z"
          fill="#66686C"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3869_65083"
          x="0"
          y="0"
          width="66"
          height="66"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3869_65083"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3869_65083"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
