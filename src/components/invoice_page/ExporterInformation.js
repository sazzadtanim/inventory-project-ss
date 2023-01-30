import React from "react";

const ExporterInformation = (props) => {
  const { htmlFor, label, paragraph } = props.information;
  return (
    <div className="flex">
      <label htmlFor={htmlFor}>{label}</label>
      <p className="font-bold">{paragraph}</p>
    </div>
  );
};

export default ExporterInformation;
