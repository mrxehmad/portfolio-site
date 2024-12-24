import React from 'react';
import '../App.css'; // Create this file for styling
import { IoMail } from "react-icons/io5";  // Import the IoMail icon from react-icons

const MailButton = () => {
  const handleMailClick = () => {
    window.location.href = 'mailto:contact@ehmad.site?subject=From ehmad.site&body=Write%20your%20message%20here';
  };

  return (
    <div className="mail-button" onClick={handleMailClick}>
      <IoMail size={30} color="white" /> {/* Icon with custom size and color */}
    </div>
  );
};

export default MailButton;
