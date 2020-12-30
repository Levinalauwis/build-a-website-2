import React from "react";

//props -> cityName, temp, color
function City({cityName, temp, color}) {
  return (
    <div className="flex flex-row p-8 justify-between items-center bg-yellow-500">
        <div className="text-2xl">(cityName)</div>
        <div className="text-5xl">(temp)</div>
    </div>
  );
}

export default City;