import React from "react";
import fotiLogo from "../assets/fotilogo.jpg";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-10 w-auto",
}) => {
  return (
    <img
      src={fotiLogo}
      alt="FoTI – Foundations of Tourism Institute logo"
      className={`block object-contain ${className}`}
      loading="lazy"
    />
  );
};
