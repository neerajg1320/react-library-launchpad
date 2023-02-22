import {TableWrapper} from "./TableWrapper";
import {useCallback, useEffect, useState} from "react";

const debugData = true;

export const TableBulk = ({data:initialData, onDataChange:updateData, ...rest}) => {
  const [modifiedRows, setModifiedRows] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);

  const updateModifiedRows = useCallback((indices) => {
    setModifiedRows((prev) => {
      const newIds = indices.filter(index => !prev.includes(index));
      return [...prev, ...newIds];
    });
  }, [setModifiedRows]);

  const updateDeletedRows = useCallback((indices) => {
    setDeletedRows((prev) => {
      const newIds = indices.filter(index => !prev.includes(index));
      return [...prev, ...newIds];
    });

    // Remove the deleted indices from the modifiedRows
    setModifiedRows((prev) => {
      return prev.filter(index => !indices.includes(index))
    });
  }, [setDeletedRows, setModifiedRows]);

  const clearMarkedRows = useCallback(() => {
    setModifiedRows([]);
    setDeletedRows([]);
  }, [setModifiedRows, setDeletedRows]);

  useEffect(() => {
    if (debugData) {
      console.log(`modifiedRows:`, modifiedRows);
      console.log(`deletedRows:`, deletedRows);
    }
  }, [modifiedRows, deletedRows]);

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
      }
    }

    console.log(`newData=`, newData);
    // setData(newData);
    updateData(newData, {modified: modifiedIndices, deleted: deletedIndices}, source);
  }, []);


  return (
      <TableWrapper data={initialData} onDataChange={handleDataChange} {...rest} />
  );
}
