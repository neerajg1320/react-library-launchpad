import React, {useMemo} from 'react';
import {BasicTable as BasicTableComponent} from "../lib/basic-table";

export default { title: 'Table' };

const BasicTable = () => {

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
        <BasicTableComponent data={data} columns={columns} />
      </>
  );
}

export {BasicTable};