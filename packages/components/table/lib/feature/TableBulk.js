import {TableWrapper} from "./TableWrapper";
import React, {useCallback, useEffect, useRef} from "react";

const debugData = false;

export const TableBulk = ({data:initialData, onDataChange:updateData, ...rest}) => {
  // const [modifiedRows, setModifiedRows] = useState([]);
  // const [deletedRows, setDeletedRows] = useState([]);
  const modifiedRowsRef = useRef([]);
  const deletedRowsRef = useRef([]);

  const updateModifiedRows = useCallback((indices) => {
    const prevModified = modifiedRowsRef.current;
    const newIds = indices.filter(index => !prevModified.includes(index));
    modifiedRowsRef.current = [...prevModified, ...newIds];

  }, []);

  const updateDeletedRows = useCallback((indices) => {
    const prevDeleted = deletedRowsRef.current;
    const newIds = indices.filter(index => !prevDeleted.includes(index));
    deletedRowsRef.current = [...prevDeleted, ...newIds];

    // Remove the deleted indices from the modifiedRows
    const prevModified = modifiedRowsRef.current;
    modifiedRowsRef.current =  prevModified.filter(index => !indices.includes(index))
  }, []);



  // The App component just maintains a copy of data.
  // The modification are done in table and tally components.
  const handleDataChange = useCallback((data, updates, source) => {
    console.log(`handleDataChange: source=${source} data=`, data);

    let newData = data;

    // TBD: We can do the below asynchronously
    // In case it is a data modify or delete action

    let modifiedIndices, deletedIndices;

    if (updates) {
      console.log(`App:handleDataChange`, updates, data);

      const modificationUpdates = updates.filter(update => update.action === 'PATCH');
      modifiedIndices = modificationUpdates.reduce((prev, update) => {
        const newIds = update.payload.indices.filter(index => !prev.includes(index));
        return [...prev, ...newIds];
      }, [])
      if (modifiedIndices.length > 0) {
        updateModifiedRows(modifiedIndices);
      }

      const deletionUpdates = updates.filter(update => update.action === 'DELETE');
      deletedIndices = deletionUpdates.reduce((prev, update) => {
        const newIds = update.payload.indices.filter(index => !prev.includes(index));
        return [...prev, ...newIds];
      }, [])
      if (deletedIndices.length > 0) {
        // TBD: This is the place where we need to check if data is in sync with server
        newData = data.filter((item, index) => !deletedIndices.includes(index));
        updateDeletedRows(deletedIndices);
      }
    }

    console.log(`newData=`, newData);
    // setData(newData);
    updateData(
        newData,
        {modifiedRows:modifiedRowsRef.current, deletedRows:deletedRowsRef.current},
        source
    );
  }, []);


  return (
      <TableWrapper data={initialData} onDataChange={handleDataChange} {...rest} />
  );
}
