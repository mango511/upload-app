import React from "react";

interface CustomziedLineProps {
  className?: string;
}

const CustomizedLine: React.FC<CustomziedLineProps> = ({ className }) => {
  return (
    <div
      className={className}
      style={{ borderBottom: "1px solid #DCDDE1", margin: "10px 0" }}
    />
  );
};

export default CustomizedLine;
