import React, {useMemo} from 'react';
import {Table} from "../lib/simple-table";

export default { title: 'Table' };

export const SimpleTable = () => {

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
        <h1>Simple Table</h1>
        <Table data={data} columns={columns} />
      </>
  );
}
