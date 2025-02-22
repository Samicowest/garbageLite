import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Import a back icon from react-icons

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate backward in the history stack
  };

  return (
    <div
      onClick={handleBack}
      style={{
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <FaArrowLeft size={24} />
      <span style={{ marginLeft: "8px" }}>Back</span>
    </div>
  );
};

export default BackButton;
