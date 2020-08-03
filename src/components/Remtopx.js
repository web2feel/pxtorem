import React,{useState,useEffect} from "react";

function Remtopx({base}) {

  const [remValue,setRemValue] = useState('')
  const [pxResult,setPxResult] = useState(0)

  useEffect(() => {
    let result = remValue * base
    setPxResult( Math.round(result * 1000) / 1000)
  },[remValue,base])

  const handleRemChange = (e) => {
    e.target.value > 999 ? setRemValue(0) : setRemValue(e.target.value)
  }
  return (
    <div className="convert-box">
      <div className="shadow">
        <input
          type="number"
          className="size-box text-shadow"
          name="rem-entry"
          id="rem-entry"
          placeholder="0"
          value={remValue}
          onChange={handleRemChange}
        />
        <p>REM</p>
      </div>
      <div className="shadow">
        <input
          type="number"
          className="result-box text-shadow"
          readOnly
          value={pxResult}
        />
        <p className="res-unit">PX</p>
      </div>
    </div>
  );
}

export default Remtopx;
