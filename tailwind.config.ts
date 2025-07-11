import type { Config } from "tailwindcss";
const config: Config = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#D90506",
        text1: "#00040A",
        gray1: "#323232",
        gray2: "#66686C",
        gray3: "#808284",
        gray4: "#C1C1C1",
        bg1: "#F9F9F9",
        bg2: "#F2F2F3",
        bg3: "#EDEDED",
        bg4: "#E6E6E6",
        hover: "#D90506",
      },
      screens: {
        d2xl: { max: "1535px" },
        dxl: { max: "1279px" },
        dlg: { max: "1023px" },
        dmd: { max: "767px" },
        dsm: { max: "639px" },
      },
      backgroundImage: {
        "custom-horizontal-fade":
          "linear-gradient(90deg, #F3F6FB 0%, #F3F6FB 51.75%, rgba(243, 246, 251, 0.56) 87.33%, rgba(253, 246, 246, 0) 100%, rgba(243, 246, 251, 0) 100%)",
        "custom-horizontal-fade-2":
          "linear-gradient(90deg, #FFFFFF 51.75%, rgba(255, 255, 255, 0) 90%)",
      },
      boxShadow: {
        "custom-1": "0px 0px 45px 0px #00000012",
        "custom-2": "0px 0px 45px 0px #0000000D",
      },
    },
  },
  plugins: [],
};
export default config;
