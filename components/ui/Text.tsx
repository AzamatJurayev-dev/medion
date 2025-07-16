import clsx from "clsx";

interface CustomTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?:
    | "header"
    | "description"
    | "link"
    | "header2"
    | "title1"
    | "title2"
    | "title3"
    | "title4"
    | "subtitle"
    | "subtitle2";
}

export const Text: React.FC<CustomTextProps> = ({
  children,
  variant = "header",
  className,
  ...props
}) => {
    const baseStyles = "font-inter flex items-center";

  const variantStyles = {
    header: "font-semibold text-[32px] text-[#1A1A1A]",
    header2: "font-medium text-xl text-[#00040A]",
    title1: "font-semibold text-[28px] leading-[38px] text-text1",
    title2: "font-semibold text-[24px] leading-8 text-text1",
    title3: "font-semibold text-[20px] leading-6 text-text1",
    title4: "font-semibold text-[16px] leading-5 text-[#00040A]",
    subtitle: "font-normal leading-[24px] text-[#323232]",
    subtitle2: "font-normal text-[14px] leading-[22px] text-[#323232]",
    description: " text-[#66686C] font-normal text-[16px] leading-7 ",
    link: "gap-1  font-normal text-[#00040A] ",
  };

  return (
    <p {...props} className={clsx(className,baseStyles, variantStyles[variant])}>
      {children}
    </p>
  );
};
