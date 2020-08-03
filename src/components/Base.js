import React from "react";

function Base({setBase,base}) {
  return (
    <div className="shadow base">
      <p> SET BASE FONT SIZE IN PX</p>
      <div>
        <input
          type="number"
          maxLength="4" 
          size="4"
          className="base-box text-shadow"
          name="base"
          id="base"
          placeholder="0"
          value={base}
          onChange={(e) => {setBase(e.target.value)}}
        />
      </div>
    </div>
  );
}

export default Base;
