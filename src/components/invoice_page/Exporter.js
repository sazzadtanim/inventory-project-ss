import React from "react";
import { ExporterData } from "../../jsonData/ExporterData";
import ExporterInformation from "./ExporterInformation";

const Exporter = () => {
  return (
    <div className="exporter">
      {ExporterData.map((information, index) => (
        <ExporterInformation information={information} key={index} />
      ))}
    </div>
  );
};

export default Exporter;
