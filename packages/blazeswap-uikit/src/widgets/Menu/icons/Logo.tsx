import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FCFC03" : "#FCFC03";
  return (
    <Svg viewBox="0 0 1027.5 350" {...props}>
      <defs>
    <rect width="1920" height="1080" id="artboard_1" />
    <rect width="1027.5" height="350" id="slice_1" />
    <clipPath id="clip_1">
      <use xlinkHref="#slice_1" clipRule="evenodd" />
    </clipPath>
    <clipPath id="clip_2">
      <use xlinkHref="#artboard_1" clipRule="evenodd" />
    </clipPath>
  </defs>
  <g id="Slice-3" clipPath="url(#clip_1)">
    <use xlinkHref="#slice_1" stroke="none" fill="none" />
    <g id="Full-HD" clipPath="url(#clip_2)" transform="translate(-601.5 -488)">
      <use xlinkHref="#artboard_1" stroke="none" />
      <g id="BLAZE" fill="#FCFC03" transform="translate(601.5 529)">
        <path d="M146.672 235.328Q132.469 238.141 116.578 238.141L22.6406 238.141L66.6562 30.8594L167.344 30.8594Q205.312 31.4219 216.562 52.9375Q223.312 66.1562 219.516 84.5781Q215.438 103.562 203.344 115.094Q196.734 121.562 185.203 126.906Q199.828 132.672 205.242 145.188Q210.656 157.703 206.859 175.562Q202.922 193.984 190.547 208.609Q182.531 218.312 172.266 224.922Q160.734 232.516 146.672 235.328ZM321.25 30.8594L285.109 200.875L387.766 200.875L379.891 238.141L233.922 238.141L277.938 30.8594L321.25 30.8594ZM595.531 238.141L566.141 30.8594L517.203 30.8594L399.219 238.141L444.5 238.141L467.844 195.531L544.203 195.531L548.562 238.141L595.531 238.141ZM671.531 201.578L780.234 201.578L772.5 238.141L611.203 238.141L618.938 201.578L754.359 67.5625L650.016 67.5625L657.891 30.8594L816.234 30.8594L808.781 65.5938L671.531 201.578ZM964.094 238.141L971.969 200.875L857.219 200.875L868.469 147.578L969.156 147.578L976.891 111.578L876.203 111.578L885.484 67.5625L995.172 67.5625L1003.05 30.8594L851.031 30.8594L807.016 238.141L964.094 238.141ZM164.812 107.359Q174.375 102.297 177.188 89.2188Q180.141 74.7344 170.016 70.0938Q160.875 66.8594 145.828 66.8594L100.266 66.8594L90.5625 112.562L141.469 112.562Q155.109 112.562 164.812 107.359ZM487.109 159.812L531.125 78.25L539.703 159.812L487.109 159.812ZM134.859 146.875L83.25 146.875L71.5781 202.141L122.484 202.141Q136.125 202.141 144.422 198.484Q159.75 191.734 163.828 172.609Q167.203 156.438 155.109 150.391Q148.359 147.016 134.859 146.875Z" />
      </g>
    </g>
  </g>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
