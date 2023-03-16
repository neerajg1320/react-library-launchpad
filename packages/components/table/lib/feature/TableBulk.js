import {TableWrapper} from "./TableWrapper";
import React, {useCallback, useImperativeHandle, useRef, useState} from "react";
import Button from "react-bootstrap/Button";

const debugData = false;

// Note: TableBulk also supports styles as well.
export const TableBulk = React.forwardRef((props, ref) => {
  const {
    data:initialData,
    onDataChange:updateData,
    stylerRules,
    onRulesComplete,
    ...rest
  } = props;

  const presetStyler = {
    5: {
      backgroundColor: 'rgba(0, 255, 0, 0.2)'
    },
    8: {
      backgroundColor: 'rgba(0, 0, 255, 0.2)'
    }
  };

  const [tableStyler, setTableStyler] = useState({})
  const modifiedRowsRef = useRef([]);
  const deletedRowsRef = useRef([]);

  // https://stackoverflow.com/questions/37949981/call-child-method-from-parent
  useImperativeHandle(ref, () => ({
    clearMarkedRows() {
      clearMarkedRows()
    },
    highlightRows() {
      highlightRows()
    },
    clearRows() {
      clearRows()
    }
  }))

  const clearMarkedRows = useCallback(() => {
    console.log(`TableBulk: clearMarkedRows()`);
    modifiedRowsRef.current = [];
    deletedRowsRef.current = [];
  }, []);

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
    updateData(null, newData, {modifiedRows:modifiedRowsRef.current, deletedRows:deletedRowsRef.current}, 'dataSourceTable');
  }, []);

  const highlightRows = useCallback(() => {
    // console.log('TableBulk:highlightRows Rows highlighted');
    // console.log('hightlighters:', highlighters);

    // We build a style Map where key is the row index
    const styleMap = {};

    // item is an array, we need to ensure that we get an array
    if (stylerRules && initialData) {
      initialData.map((row, rIdx) => {
            stylerRules.forEach(styleRule => {
              if (rIdx == -1) {
                console.log(`highlightRows: row=`, row);
                console.log(styleRule);
              }
              const result = styleRule['condition'](row, rIdx);
              if (result && result['style']) {
                styleMap[rIdx] = result['style'];
                if (styleRule['action']) {
                  styleRule['action'](row, rIdx);
                }
              }
            })
          }
      )

      if (onRulesComplete) {
        onRulesComplete();
      }
    }

    // console.log(`styleMap:${JSON.stringify(styleMap, null, 2)}`);
    // return styleMap;
    setTableStyler(styleMap);
  }, [stylerRules]);

  const clearRows = useCallback(() => {
    console.log('TableBulk:clearRows Rows cleared');
    setTableStyler([]);
  }, []);

  return (
      <>
        <div>
          <Button onClick={highlightRows}>
            Highlight
          </Button>
          <Button onClick={clearRows}>
            Clear
          </Button>
        </div>
        <TableWrapper data={initialData} onDataChange={handleDataChange} styler={tableStyler} {...rest} />
      </>
  );
});
