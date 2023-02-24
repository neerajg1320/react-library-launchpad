import React, {useMemo, useState, useCallback, useRef} from "react";
import {TableBulk as BulkTableComponent} from "../lib/feature/TableBulk";

export default { title: 'Table' };

const BulkTable = () => {
  const [data, setData] = useState([
    {
      name: "Alice",
      age: 25,
      team: "Tourists"
    },
    {
      name: "Bob",
      age: 26,
      team: "Archaeologists"
    },
  ]);

  const selectables = useMemo(() => {
    return [
      {
        keyName: "group",
        choices: ['Tourists', 'Archaeologists', 'Professionals']
      }
    ]
  });
  const [ledgers, setLedgers] = useState([]);
  // The following two could be turned to refs
  const tallySavedRef = useRef(false);

  // Kept for reference
  const columns = useMemo(
      () => {
        return [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Type",
            accessor: "age",
          }
        ]
      }, []);


  // The App component just maintains a copy of data.
  // The modification are done in table and tally components.
  const handleDataChange = useCallback((data, updates, source) => {
    // console.log(`handleDataChange: source=${source} tallySaved=${tallySavedRef.current} data=`, data);

    let newData = data;

    // TBD: We can do the below asynchronously
    // In case it is a data modify or delete action

    if (source === "dataSourceFileReader") {
      const indices = data.map((item,index) => index);
      if (indices.length > 0) {
        // setModifiedRows(indices);
        tallySavedRef.current = false;
      }
    } else if (source === "dataSourceTable") {
      console.log(`handleDataChange: updates=`, updates);
    } else if (source === "dataSourceTally") {
      // We can count the Tally Operations here. This will happen only if data is submitted to Tally
      // We should get the indices here and clear the modifiedRows
      // console.log(`handleDataChange: source:${source} updates=`, updates);

      const responseIds = updates[0].payload;

      // We need to be very careful here
      // We need to check if all responses are accounted
      if (responseIds.length > 0) {
        // clearMarkedRows();
        tallySavedRef.current = true;
      }

    } else {
      console.error(`handleDataChange: source '${source}' not supported`);
    }

    setData(newData);
  }, []);

  return (
      <>
        <h1>Table Tagger</h1>
        {/*<TableTagger {...{data, columns}} />*/}
        <BulkTableComponent
            data={data}
            onDataChange={handleDataChange}
            {...{ledgers, selectables}}
        />
      </>
  );
}

export {BulkTable};