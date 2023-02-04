import React, {useMemo} from 'react';
import {StyledTable as StyledTableComponent} from "../lib/styled/styled-table";

export default { title: 'Table' };

const StyledTable = () => {

  const data = useMemo(() => {
    return [
      {
        name: "Alice",
        age: 25
      },
      {
        name: "Bob",
        age: 26
      },
    ]
  }, []);

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

  return (
      <>
        <h1>Basic Table</h1>
        <StyledTableComponent data={data} columns={columns} />
      </>
  );
}

export {StyledTable};