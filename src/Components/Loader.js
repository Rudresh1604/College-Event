import React from "react";
import { DNA } from "react-loader-spinner";
function Loader() {
  return (
    <div className="bg-gray-900 flex justify-center items-center loader-container">
      <DNA
        visible={true}
        height="500"
        width="500"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}

export default Loader;
