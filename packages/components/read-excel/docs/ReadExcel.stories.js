import React, {useState} from "react";
import ReadExcelComponent  from "../lib/ReadExcel";

export default { title: 'FileReader' };

const ReadExcel = () => {
  const [data, setData] = useState([]);

  const handleComplete = (json) => {
    console.log(`json:`, json);
    setData(json.data);
  };

  return (
      <>
        <ReadExcelComponent onComplete={handleComplete} />
        <pre>
        {data && JSON.stringify(data, null, 2)}
      </pre>
      </>
  );
}

export {ReadExcel};