import React from "react";

//props--> Header, color 
function Header ({header, color}) {
  return(
    <div className={"font-mono flex flex-col p-2.5 mx-20 mt-20 w-auto h-80 rounded-2xl align-center text-center justify-between items-center " + color}>
        <div className="text-3xl">{header}</div>
    </div>
  );
}



export default Header;


