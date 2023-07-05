import React from "react";
import { FaHeart } from "react-icons/fa";

const Tag = ({icon, color }) => {
  const tagStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.875rem",
    fontWeight: "600",
    borderRadius: "9999px",
    color: color,
    padding: "0.5rem",
  };

  return (
    <span style={tagStyle} className="bg-white">
      {icon}
    </span>
  );
};

export default Tag;
