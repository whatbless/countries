import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const DataSended = ({ action }: { action: any }) => {
  setTimeout(() => {
    try {
      action();
    } catch {}
  }, 3000);

  return (
    <div className="flex flex-col items-center justify-center">
      <FontAwesomeIcon
        className="text-9xl text-green-600"
        icon={faCircleCheck}
      />
      <h1 className="text-4xl font-bold my-5">!תודה על פנייתך</h1>
      <p className="text-lg">ביצור עמך קשר בהקדם</p>
    </div>
  );
};

export default DataSended;
