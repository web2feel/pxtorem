import React,{useState,useEffect} from "react";

function Pxtorem({base}) {

  const [pxValue,setPxValue] = useState('')
  const [remResult,setRemResult] = useState(0)

  useEffect(() => {
    let result = pxValue/base
    setRemResult( Math.round(result * 1000) / 1000)
  },[pxValue,base])

  const handlePxChange = (e) => {
    e.target.value > 9999 ? setPxValue(0) : setPxValue(e.target.value)
  }

  return (
    <div className="convert-box">
      <div className="shadow">
        <input
          type="number"
          className="size-box text-shadow"
          name="px-entry"
          id="px-entry"
          placeholder="0"
          pattern="[0-9]"
          value={pxValue}
          onChange = {handlePxChange}
        />
        <p>PX</p>
      </div>
      <div className="shadow">
      <input
          type="number"
          className="result-box text-shadow"
          value={remResult}
          readOnly
        />
        <p className="res-unit">REM</p>
      </div>
    </div>
  );
}

export default Pxtorem;
