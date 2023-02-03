import React from 'react';
import { useTable } from 'react-table';

var Table = function Table(_ref) {
  var data = _ref.data,
    columns = _ref.columns;
  var _useTable = useTable({
      columns: columns,
      data: data
    }),
    getTableProps = _useTable.getTableProps,
    getTableBodyProps = _useTable.getTableBodyProps,
    headerGroups = _useTable.headerGroups,
    rows = _useTable.rows,
    prepareRow = _useTable.prepareRow;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", getTableProps(), /*#__PURE__*/React.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React.createElement("th", column.getHeaderProps(), column.render("Header"));
    }));
  })), /*#__PURE__*/React.createElement("tbody", getTableBodyProps(), rows.map(function (row, i) {
    prepareRow(row);
    return /*#__PURE__*/React.createElement("tr", row.getRowProps(), row.cells.map(function (cell) {
      return /*#__PURE__*/React.createElement("td", cell.getCellProps(), cell.render("Cell"));
    }));
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Data"), /*#__PURE__*/React.createElement("pre", null, JSON.stringify(data, null, 2)), /*#__PURE__*/React.createElement("h2", null, "Columns"), /*#__PURE__*/React.createElement("pre", null, JSON.stringify(columns, null, 2))));
};

export { Table };
