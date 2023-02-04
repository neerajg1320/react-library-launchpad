import React$1, { createContext, useEffect, useContext, useState, useCallback, useMemo, forwardRef, useRef } from 'react';
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination, useRowSelect, useBlockLayout, useResizeColumns, useAsyncDebounce } from 'react-table';
import { format, isDate as isDate$1 } from 'date-fns';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import { BiSearchAlt } from 'react-icons/bi';
import { FaSearchPlus } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import { RxLetterCaseCapitalize } from 'react-icons/rx';
import { TbLetterF } from 'react-icons/tb';
import { SiExpress } from 'react-icons/si';
import Tooltip from 'react-bootstrap/Tooltip';
import { OverlayTrigger } from 'react-bootstrap';

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = "table {\n    /*font-family: Arial, Helvetica, sans-serif;*/\n    border-collapse: collapse;\n}\n\ntable td, table th {\n    border: 1px solid #ddd;\n    padding: 6px;\n}\n\ntable tr:nth-child(even){background-color: #f2f2f2;}\n\ntable tr:hover {background-color: #ddd;}\n\ntable th, tfoot {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: center;\n    background-color: #04AA6D;\n    color: white;\n}\n";
styleInject(css_248z$2);

var BasicTable = function BasicTable(_ref) {
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
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement("table", getTableProps(), /*#__PURE__*/React$1.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React$1.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React$1.createElement("th", column.getHeaderProps(), column.render("Header"));
    }));
  })), /*#__PURE__*/React$1.createElement("tbody", getTableBodyProps(), rows.map(function (row, i) {
    prepareRow(row);
    return /*#__PURE__*/React$1.createElement("tr", row.getRowProps(), row.cells.map(function (cell) {
      return /*#__PURE__*/React$1.createElement("td", cell.getCellProps(), cell.render("Cell"));
    }));
  })))), /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement("h2", null, "Data"), /*#__PURE__*/React$1.createElement("pre", null, JSON.stringify(data, null, 2)), /*#__PURE__*/React$1.createElement("h2", null, "Columns"), /*#__PURE__*/React$1.createElement("pre", null, JSON.stringify(columns, null, 2))));
};

var StyledTable = function StyledTable(_ref) {
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
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("div", {
    className: "styled-table"
  }, /*#__PURE__*/React$1.createElement("table", getTableProps(), /*#__PURE__*/React$1.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React$1.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React$1.createElement("th", column.getHeaderProps(), column.render("Header"));
    }));
  })), /*#__PURE__*/React$1.createElement("tbody", getTableBodyProps(), rows.map(function (row, i) {
    prepareRow(row);
    return /*#__PURE__*/React$1.createElement("tr", row.getRowProps(), row.cells.map(function (cell) {
      return /*#__PURE__*/React$1.createElement("td", cell.getCellProps(), cell.render("Cell"));
    }));
  })))), /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement("h2", null, "Data"), /*#__PURE__*/React$1.createElement("pre", null, JSON.stringify(data, null, 2)), /*#__PURE__*/React$1.createElement("h2", null, "Columns"), /*#__PURE__*/React$1.createElement("pre", null, JSON.stringify(columns, null, 2))));
};

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function getPropObj(prop) {
  return {
    "keyName": prop
  };
}
function insertProp(propObj, list, before) {
  if (before) {
    var index = list.findIndex(function (item) {
      return item.keyName === before;
    });
    // console.log(`Insert at ${index}`);
    list.splice(index, 0, propObj);
  } else {
    list.push(propObj);
  }
}
function getColumns(data) {
  var sampleSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!data) {
    return [];
  }
  var finalData = data;
  if (sampleSize > 0) {
    finalData.slice(0, sampleSize);
  }
  var columns = [];

  // List of objects: [{missingKey, beforeKey}]
  var missingPropsAll = [];

  // List of keys: [missingKey]
  var missingPropsConsecutive = [];
  finalData.forEach(function (row, index) {
    var _loop = function _loop(property) {
      if (index < 1) {
        missingPropsConsecutive.push(property);
      } else {
        if (!columns.map(function (col) {
          return col.keyName;
        }).includes(property)) {
          missingPropsConsecutive.push(property);
        } else {
          missingPropsConsecutive.forEach(function (mProp) {
            missingPropsAll.push({
              key: mProp,
              before: property
            });
          });
          missingPropsConsecutive = [];
        }
      }
    };
    for (var property in row) {
      _loop(property);
    }

    // These consecutive missing props were at tail
    if (missingPropsConsecutive.length) {
      missingPropsConsecutive.forEach(function (mProp) {
        missingPropsAll.push({
          key: mProp,
          before: null
        });
      });
      missingPropsConsecutive = [];
    }
    if (missingPropsAll.length) {
      missingPropsAll.forEach(function (_ref) {
        var key = _ref.key,
          before = _ref.before;
        // console.log(`key=${key} before=${before}`);
        insertProp(getPropObj(key), columns, before);
      });
      missingPropsAll = [];
    }
  });

  // console.log(`columns=`, JSON.stringify(columns, null, 2));
  return columns;
}

var indiaDateFormat = "dd/MM/yyyy";
function isString(val) {
  return typeof val === 'string' || val instanceof String;
}
function isDate(val) {
  // Kept for reference
  // return val instanceof Date && !isNaN(val)

  return isDate$1(val);
}
function valToString(val, format$1) {
  if (isDate(val)) {
    return format(val, format$1 ? format$1 : indiaDateFormat);
  }
  return val ? val.toString() : "";
}
function getValueType(value) {
  var valueType = _typeof(value);
  if (valueType === "object") {
    if (isDate(value)) {
      valueType = "date";
    }
  }
  return valueType;
}

function colToRTCol(colObj, _ref) {
  var showTypes = _ref.showTypes;
  var reactColObj = _objectSpread2({
    "id": colObj["keyName"],
    "Header": colObj["header"] || colObj["keyName"],
    // We need accessor as a function when we have . (dot) in the key name
    "accessor": function accessor(row) {
      return row[colObj["keyName"]];
    }
  }, colObj);

  // console.log(`colToRTCol: ${JSON.stringify(reactColObj, null, 2)}`);

  reactColObj.Cell = function (_ref2) {
    var value = _ref2.value;
    var valueType = getValueType(value);
    var alignment;
    if (reactColObj.alignment) {
      if (reactColObj.alignment === "left") {
        alignment = "flex-start";
      } else if (reactColObj.alignment === "right") {
        alignment = "flex-end";
      } else if (reactColObj.alignment === "center") {
        alignment = "center";
      }
    } else {
      alignment = valueType === "number" ? "flex-end" : valueType === "date" ? "center" : "flex-start";
    }
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("div", {
      style: {
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React$1.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: alignment
      }
    }, /*#__PURE__*/React$1.createElement("div", {
      style: {
        height: "1em",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      }
    }, valToString(value, reactColObj.format) || "")), showTypes && /*#__PURE__*/React$1.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React$1.createElement("span", {
      style: {
        color: "gray",
        fontSize: "0.7em"
      }
    }, valueType))));
  };
  return reactColObj;
}

var statementColumns = [{
  header: "SNo",
  matchLabels: ["Sl. No."],
  keyName: "serialNum",
  width: 50,
  type: "number",
  required: false,
  alignment: "center"
}, {
  header: "Transaction Date",
  matchLabels: ["Transaction Date", "Date"],
  keyName: "transactionDate",
  width: 100,
  type: "date",
  // format: `${indiaDateFormat} HH:mm`,
  required: true
}, {
  header: "Value Date",
  matchLabels: ["Value Date", "Value Dt"],
  keyName: "valueDate",
  width: 100,
  type: "date",
  format: indiaDateFormat,
  required: false
}, {
  header: "Description",
  matchLabels: ["Description", "Narration"],
  keyName: "description",
  width: 250,
  type: "string",
  required: true,
  format: "yyyy-MM-dd"
}, {
  header: "Reference",
  matchLabels: ["Chq / Ref number", "Chq./Ref.No."],
  keyName: "reference",
  width: 80,
  type: "string",
  acceptedTypes: ["string", "number"],
  required: false
}, {
  header: "Debit",
  matchLabels: ["Debit", "Withdrawal Amt."],
  keyName: "debit",
  width: 80,
  type: "number",
  required: false
}, {
  header: "Credit",
  matchLabels: ["Credit", "Deposit Amt."],
  keyName: "credit",
  width: 80,
  type: "number",
  required: false
}, {
  header: "Balance",
  matchLabels: ["Balance", "Closing Balance"],
  keyName: "balance",
  width: 100,
  type: "number",
  required: true
}, {
  header: "DrCr",
  matchLabels: ["Dr / Cr"],
  keyName: "drCr",
  width: 50,
  type: "string",
  required: false,
  alignment: "center"
}];
var accountingColumns = [{
  header: "Category",
  matchLabels: ["Category"],
  keyName: "category",
  edit: true,
  bulk: true,
  type: 'select',
  // This needs to be fixed now
  choices: ['Conveyance', 'Lodging', 'Stationary', 'Salary', 'Travel', "Suspense"],
  width: 120,
  defaultValue: "Suspense",
  required: true
}, {
  header: "Voucher Id",
  matchLabels: ["VoucherId"],
  keyName: "voucherId",
  edit: false,
  bulk: false,
  defaultValue: -1,
  width: 50,
  required: true,
  hidden: false
}, {
  header: "Remarks",
  matchLabels: ["Remarks"],
  keyName: "remarks",
  edit: true,
  bulk: true,
  type: 'input',
  defaultValue: ""
}];
var shadowColumns = [{
  keyName: "id",
  edit: false,
  hidden: true
}, {
  keyName: "modifyMarker",
  edit: false,
  hidden: true
}, {
  keyName: "deleteMarker",
  edit: false,
  hidden: true
}];
var presetColumns = [].concat(statementColumns, accountingColumns, shadowColumns);

var TableDataContext = /*#__PURE__*/createContext({});

// Currently its a controlled component
var ExpandableButton = function ExpandableButton(_ref) {
  var children = _ref.children,
    title = _ref.title,
    icon = _ref.icon,
    clickComponent = _ref.clickComponent,
    disabled = _ref.disabled,
    expanded = _ref.expanded,
    onChange = _ref.onChange,
    popupPosition = _ref.popupPosition;
  // console.log(`Rendering <ExpandableButton> value=${value}`);

  // The followed function can be use when we need to inject or remove props in child
  var childrenWithProps = React$1.Children.map(children, function (child) {
    // https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
    // avoids typescript error as well
    if ( /*#__PURE__*/React$1.isValidElement(child)) {
      return /*#__PURE__*/React$1.cloneElement(child);
    }
    return child;
  });
  var handleBlur = function handleBlur(e) {
    // https://stackoverflow.com/questions/12092261/prevent-firing-the-blur-event-if-any-one-of-its-children-receives-focus
    // if the blur was because of outside focus
    // currentTarget is the parent element, relatedTarget is the clicked element
    if (expanded && !e.currentTarget.contains(e.relatedTarget)) {
      console.log("ExpandableButton:handleBlur");
      onChange(!expanded);
    }
  };
  return /*#__PURE__*/React$1.createElement("div", {
    tabIndex: "1",
    onBlur: handleBlur,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "relative"
    }
  }, icon, clickComponent, !icon && !clickComponent && /*#__PURE__*/React$1.createElement(Button, {
    variant: "primary",
    size: "sm",
    disabled: disabled,
    onClick: function onClick(e) {
      return onChange(!expanded);
    }
  }, title), expanded && /*#__PURE__*/React$1.createElement("div", {
    style: _objectSpread2({
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      boxShadow: "rgba(0, 0, 0, 0.5) 0px 5px 15px",
      borderRadius: "4px",
      position: "absolute",
      backgroundColor: "white",
      zIndex: "1"
    }, _objectSpread2({}, popupPosition))
  }, childrenWithProps));
};

var ColumnsEditBox = function ColumnsEditBox(_ref) {
  var columns = _ref.columns,
    onSave = _ref.onSave,
    onCancel = _ref.onCancel,
    onButtonClick = _ref.onButtonClick;
  {
    console.log("Rendering <ColumnsEditBox>");
  }
  useEffect(function () {
    {
      console.log("<ColumnsEditBox>: First render");
    }
    return function () {
      {
        console.log("<ColumnsEditBox>: Destroyed");
      }
    };
  }, []);

  // We haven't used state here as we do not want to rerender the component
  // when setting the columnValues
  var columnValues = [];
  var handleSaveClick = function handleSaveClick() {
    if (onButtonClick) {
      onButtonClick();
    }
    if (onSave) {
      var modifiedFields = columnValues.filter(function (item) {
        return item.active;
      }).map(function (item) {
        return [item.name, item.value];
      });
      onSave(Object.fromEntries(modifiedFields));
    }
  };
  var handleCancelClick = function handleCancelClick() {
    if (onButtonClick) {
      onButtonClick();
    }
    if (onCancel) {
      onCancel();
    }
  };
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, columns.map(function (col, col_idx) {
    columnValues.push({
      active: false,
      name: col.keyName
    });
    return /*#__PURE__*/React$1.createElement("div", {
      key: col_idx,
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px"
      }
    }, /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement("input", {
      type: "checkbox",
      onChange: function onChange(e) {
        columnValues[col_idx].active = e.target.checked;
      }
    })), /*#__PURE__*/React$1.createElement("div", {
      style: {
        minWidth: "80px"
      }
    }, col.Header), /*#__PURE__*/React$1.createElement("div", null, col.type === "input" ? /*#__PURE__*/React$1.createElement("form", null, /*#__PURE__*/React$1.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React$1.createElement("input", {
      type: "email",
      className: "form-control",
      "aria-describedby": "emailHelp",
      placeholder: "Enter phone",
      onChange: function onChange(e) {
        columnValues[col_idx].value = e.target.value;
      }
    }))) : col.type === "select" ? /*#__PURE__*/React$1.createElement(Select, {
      options: col.choices.map(function (choice) {
        return {
          label: choice,
          value: choice
        };
      }),
      value: columnValues[col_idx].value,
      onChange: function onChange(option) {
        columnValues[col_idx].value = option.value;
        // console.log(`columnValues=${JSON.stringify(columnValues, null, 2)}`);
      },

      styles: {
        container: function container(provided) {
          return _objectSpread2(_objectSpread2({}, provided), {}, {
            width: 150
          });
        }
      }
      // isDisabled={false}
    }) : ""));
  }), /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "end",
      paddingRight: "20px",
      gap: "10px"
    }
  }, /*#__PURE__*/React$1.createElement(Button, {
    variant: "outline-danger",
    size: "sm",
    onClick: handleCancelClick
  }, "Cancel"), /*#__PURE__*/React$1.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: handleSaveClick
  }, "Save")));
};

var PATCH = 'PATCH';
var DELETE = 'DELETE';

var BulkOperationsSection = function BulkOperationsSection(_ref) {
  var edit = _ref.edit;
  var _useContext = useContext(TableDataContext),
    columns = _useContext.columns,
    selectedFlatRows = _useContext.selectedFlatRows,
    toggleAllRowsSelected = _useContext.toggleAllRowsSelected,
    updateData = _useContext.onChange;
  var bulkEnabled = selectedFlatRows && (selectedFlatRows === null || selectedFlatRows === void 0 ? void 0 : selectedFlatRows.length) > 0;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    bulkEditExpanded = _useState2[0],
    setBulkEditExpanded = _useState2[1];

  // For debugging purpose
  useEffect(function () {
    return function () {
    };
  }, []);
  var getRowIndices = useCallback(function (selRows) {
    return selRows.map(function (row) {
      return row.index;
    });
  }, []);
  var handleBulkDeleteClick = useCallback(function () {
    var indices = getRowIndices(selectedFlatRows);
    updateData(DELETE, indices);
    setBulkEditExpanded(false);
  }, [selectedFlatRows]);
  var handleBulkEditSaveClick = useCallback(function (patch) {
    var indices = getRowIndices(selectedFlatRows);
    updateData(PATCH, indices, patch);
    setBulkEditExpanded(false);
  }, [selectedFlatRows]);
  var handleBulkEditCancelClick = useCallback(function () {
    setBulkEditExpanded(false);
  }, []);
  var handleClearSelectionClick = useCallback(function () {
    if (toggleAllRowsSelected) {
      toggleAllRowsSelected(false);
    }
  }, [toggleAllRowsSelected]);

  // Support bulk select
  var bulkColumns = useMemo(function () {
    return columns !== null && columns !== void 0 && columns.length ? columns.filter(function (col) {
      return col.bulk;
    }) : [];
  }, [columns]);
  return /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "center"
    }
  }, edit && /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement(Button, {
    variant: "danger",
    size: "sm",
    disabled: !bulkEnabled,
    onClick: function onClick(e) {
      return handleBulkDeleteClick();
    }
  }, "Bulk Delete"), /*#__PURE__*/React$1.createElement(ExpandableButton, {
    title: "Bulk Edit",
    disabled: !bulkColumns.length || !bulkEnabled,
    expanded: bulkEditExpanded,
    onChange: function onChange(exp) {
      return setBulkEditExpanded(exp);
    },
    popupPosition: {
      left: "60px",
      top: "25px"
    }
  }, /*#__PURE__*/React$1.createElement(ColumnsEditBox, {
    columns: bulkColumns,
    onSave: handleBulkEditSaveClick,
    onCancel: handleBulkEditCancelClick,
    disabled: !bulkEnabled
  }))), /*#__PURE__*/React$1.createElement(Button, {
    variant: "outline-dark",
    size: "sm",
    disabled: !bulkEnabled,
    onClick: handleClearSelectionClick
  }, "Clear"));
};

// export default EditSelectionTable;

// We use React.memo when we want to render the child only when any props change
var BulkOperationsSection$1 = /*#__PURE__*/React$1.memo(BulkOperationsSection);

var css_248z$1 = ".table-column-resizer_resizer__ZPmdn {\n    display: inline-block;\n    background: green;\n    width: 10px;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transform: translateX(50%);\n    /*z-index: 1;*/\n    /* prevent scroll on touch devices */\n    touch-action: none;\n}\n\n\n.table-column-resizer_isResizing__l-fFJ {\n    background: darkgreen;\n}";
styleInject(css_248z$1);

var _excluded = ["indeterminate"];
var RowCheckbox = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var indeterminate = _ref.indeterminate,
    rest = _objectWithoutProperties(_ref, _excluded);
  var defaultRef = useRef();
  var resolvedRef = ref || defaultRef;
  useEffect(function () {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("input", _extends({
    type: "checkbox",
    ref: resolvedRef
  }, rest)));
});

// https://cloudnweb.dev/2020/08/how-to-build-an-actionable-data-table-with-react-table-and-tailwindcss/
var EditableControlledCell = function EditableControlledCell(_ref) {
  var initialValue = _ref.value,
    row = _ref.row,
    column = _ref.column,
    updateData = _ref.updateData;
  var _useState = useState(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  useEffect(function () {
    return function () {
    };
  }, []);
  useEffect(function () {
    setValue(initialValue);
  }, [initialValue]);

  // console.log(`value=${value} initialValue=${initialValue}`);

  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("form", null, /*#__PURE__*/React$1.createElement("input", {
    className: "form-control",
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    onBlur: function onBlur(e) {
      return updateData(PATCH, [row.index], _defineProperty({}, column.keyName, value));
    }
  })));
};

// https://cloudnweb.dev/2020/08/how-to-build-an-actionable-data-table-with-react-table-and-tailwindcss/
var SelectableCell = function SelectableCell(_ref) {
  var initialValue = _ref.value,
    row = _ref.row,
    column = _ref.column,
    updateData = _ref.updateData,
    choices = _ref.choices,
    placement = _ref.placement;
  var _useState = useState(initialValue || ""),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    options = _useState4[0],
    setOptions = _useState4[1];

  // If the initialValue is changed external, sync it up with our state
  useEffect(function () {
    if (initialValue) {
      // console.log(`initialValue=${initialValue}`);
      setValue(initialValue);
    }
  }, [initialValue]);
  useEffect(function () {
    var options = choices.map(function (choice) {
      return {
        label: choice,
        value: choice
      };
    });
    setOptions(options);
  }, [choices]);
  var handleSelect = useCallback(function (opt) {
    // console.log(opt.value);
    setValue(opt.value);
    updateData(PATCH, [row.index], _defineProperty({}, column.keyName, opt.value));
  }, []);
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("div", {
    style: {
      overflow: "visible"
    }
  }, /*#__PURE__*/React$1.createElement(Select, {
    menuPlacement: placement,
    options: choices.map(function (choice) {
      return {
        label: choice,
        value: choice
      };
    }),
    value: options.filter(function (opt) {
      return opt.label === value;
    }),
    onChange: handleSelect
  })));
};

var FlagIcon = function FlagIcon(_ref) {
  var children = _ref.children,
    value = _ref.value,
    onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("span", {
    className: "".concat(value ? "active" : ""),
    onClick: function onClick(e) {
      return onChange(!value);
    },
    style: {
      cursor: "pointer",
      border: "1px dashed lightblue",
      fontSize: "0.9em"
    }
  }, children);
};

var css_248z = ".inputIcons_filter-flags__uYcnI .inputIcons_active__gsUGR {\n    background-color: lightblue;\n}";
styleInject(css_248z);

var InputWithIcons = function InputWithIcons(_ref) {
  var defaultValue = _ref.defaultValue,
    onChange = _ref.onChange,
    disabled = _ref.disabled;
  // console.log(`Rendering <InputWithIcons>`);

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    caps = _useState2[0],
    setCaps = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    full = _useState4[0],
    setFull = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    regex = _useState6[0],
    setRegex = _useState6[1];
  var inputRef = useRef();
  useEffect(function () {
    if (inputRef.current.value) {
      onChange({
        text: inputRef.current.value,
        flags: {
          caps: caps,
          full: full,
          regex: regex
        }
      });
    }
  }, [caps, full, regex]);
  var handleInputChange = useCallback(function (e) {
    onChange({
      text: e.target.value,
      flags: {
        caps: caps,
        full: full,
        regex: regex
      }
    });
  }, [caps, full, regex]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "4px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    disabled: disabled,
    className: "form-control",
    defaultValue: defaultValue.text,
    onChange: handleInputChange,
    style: {
      width: "200px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "filter-flags",
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "4px",
      position: "absolute",
      right: "5px"
    }
  }, /*#__PURE__*/React.createElement(FlagIcon, {
    value: caps,
    onChange: function onChange(e) {
      return setCaps(!caps);
    }
  }, /*#__PURE__*/React.createElement(RxLetterCaseCapitalize, null)), /*#__PURE__*/React.createElement(FlagIcon, {
    value: full,
    onChange: function onChange(e) {
      return setFull(!full);
    }
  }, /*#__PURE__*/React.createElement(TbLetterF, null)), /*#__PURE__*/React.createElement(FlagIcon, {
    value: regex,
    onChange: function onChange(e) {
      return setRegex(!regex);
    }
  }, /*#__PURE__*/React.createElement(SiExpress, null))));
};

var ColumnFilterWithIcon = function ColumnFilterWithIcon(_ref) {
  var renderedColumn = _ref.column;
  useEffect(function () {
    return function () {
    };
  }, []);
  var filterValue = renderedColumn.filterValue,
    setFilter = renderedColumn.setFilter;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  var _useState3 = useState(filterValue === null || filterValue === void 0 ? void 0 : filterValue.flagBlank),
    _useState4 = _slicedToArray(_useState3, 2),
    blankEnabled = _useState4[0],
    setBlankEnabled = _useState4[1];
  var _useState5 = useState(filterValue === null || filterValue === void 0 ? void 0 : filterValue.flagText),
    _useState6 = _slicedToArray(_useState5, 2),
    textEnabled = _useState6[0],
    setTextEnabled = _useState6[1];
  var _useState7 = useState(filterValue === null || filterValue === void 0 ? void 0 : filterValue.filterText),
    _useState8 = _slicedToArray(_useState7, 2),
    filterText = _useState8[0],
    setFilterText = _useState8[1];
  var _useState9 = useState(filterValue === null || filterValue === void 0 ? void 0 : filterValue.filterText),
    _useState10 = _slicedToArray(_useState9, 2),
    textFlags = _useState10[0],
    setTextFlags = _useState10[1];

  // This should be taken out if we can find a way to know which column filter changed
  var _useContext = useContext(TableDataContext),
    updateColumnFilter = _useContext.onColumnFilterChange;

  // useEffect(() => {
  //   // console.log(renderedColumn);
  //   if (renderedColumn.id === "description") {
  //     console.log(`ColumnFilterWithIcon: filterValue=${JSON.stringify(filterValue)}`);
  //   }
  //   // updateColumnFilter(renderedColumn.id, filterValue);
  // }, [filterValue]);

  useEffect(function () {
    // Check if we need state
    // console.log(`ColumnFilterWithIcon: filterText=${filterText}`)
    var filterObject = {
      flagBlank: blankEnabled,
      flagText: textEnabled,
      filterText: filterText,
      textFlags: textFlags
    };
    // This is a hook we are trying
    updateColumnFilter(renderedColumn.id, filterObject);
    setFilter(filterObject);
  }, [blankEnabled, textEnabled, filterText, textFlags]);
  var clearFilter = useCallback(function () {
    setExpanded(!expanded);
    updateColumnFilter(renderedColumn.id, undefined);
    setFilter(undefined);
  }, [expanded]);
  var searchIcon = filterValue !== null && filterValue !== void 0 && filterValue.flagBlank || filterValue !== null && filterValue !== void 0 && filterValue.flagText && filterValue !== null && filterValue !== void 0 && filterValue.filterText ? /*#__PURE__*/React$1.createElement(FaSearchPlus, {
    onClick: function onClick(e) {
      return setExpanded(!expanded);
    },
    style: {
      cursor: "pointer"
    }
  }) : /*#__PURE__*/React$1.createElement(BiSearchAlt, {
    onClick: function onClick(e) {
      return setExpanded(!expanded);
    },
    style: {
      cursor: "pointer"
    }
  });
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement(ExpandableButton, {
    title: "S",
    icon: searchIcon,
    expanded: expanded,
    onChange: function onChange(e) {
      return setExpanded(!expanded);
    },
    popupPosition: renderedColumn.index < 3 ? {
      top: "100%",
      left: "50%"
    } : renderedColumn.index < 6 ? {
      top: "100%",
      transform: "translate(-50%, 0)"
    } : {
      top: "100%",
      right: "50%"
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    style: {
      color: "black",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: "100%",
      color: "black",
      display: "flex",
      justifyContent: "space-between",
      gap: "10px"
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    style: {
      color: "black",
      display: "flex",
      flexDirection: "row",
      justifyContent: "start",
      gap: "5px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      color: "black",
      fontSize: ".8em",
      fontWeight: "normal"
    }
  }, renderedColumn.Header), /*#__PURE__*/React$1.createElement(BiSearchAlt, null)), /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement(TiTick, {
    style: {
      color: "green",
      fontSize: "1.3em",
      cursor: "pointer"
    },
    onClick: function onClick(e) {
      return setExpanded(!expanded);
    }
  }), /*#__PURE__*/React$1.createElement(AiOutlineClose, {
    onClick: function onClick(e) {
      return clearFilter();
    },
    style: {
      color: "red",
      cursor: "pointer"
    }
  }))), /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: "10px"
    }
  }, /*#__PURE__*/React$1.createElement("input", {
    type: "checkbox",
    defaultChecked: true,
    onChange: function onChange(e) {
      setTextEnabled(e.target.checked);
    }
  }), /*#__PURE__*/React$1.createElement(InputWithIcons, {
    disabled: !textEnabled,
    defaultValue: {
      text: filterValue === null || filterValue === void 0 ? void 0 : filterValue.filterText,
      flags: filterValue === null || filterValue === void 0 ? void 0 : filterValue.textFlags
    },
    onChange: function onChange(_ref2) {
      var text = _ref2.text,
        flags = _ref2.flags;
      // console.log(`text=${text} flags=${JSON.stringify(flags, null, 2)}`)
      setFilterText(text);
      setTextFlags(flags);
    }
  })), /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      fontSize: "0.9em",
      fontWeight: "normal",
      marginTop: "5px"
    }
  }, /*#__PURE__*/React$1.createElement("input", {
    type: "checkbox",
    onChange: function onChange(e) {
      setBlankEnabled(e.target.checked);
    }
  }), /*#__PURE__*/React$1.createElement("label", null, "Blanks")))));
};

var filterUsingRegex = function filterUsingRegex(rows, columnIds, filterValue) {
  // console.log(`rows[]=${rows.length} columnsIds=${JSON.stringify(columnIds, null, 2)}`);
  // console.log(`filterValue=${JSON.stringify(filterValue, null, 2)}`);

  var flagBlank = filterValue.flagBlank,
    flagText = filterValue.flagText,
    filterText = filterValue.filterText,
    textFlags = filterValue.textFlags;

  // None of the filters is active
  if (!flagText && !flagBlank) {
    return rows;
  }

  // Blank filter is not active, Text filter is active but textbox is empty
  if (!flagBlank && flagText && !filterText) {
    return rows;
  }

  // console.log(`textFlags=${JSON.stringify(textFlags, null, 2)}`);

  var finalFilterText;
  var re;
  if (textFlags.regex || textFlags.caps) {
    finalFilterText = filterText;
  } else {
    finalFilterText = filterText.toLowerCase();
  }
  if (textFlags.regex) {
    try {
      var reFlags = "";
      if (!textFlags.caps) {
        reFlags = reFlags.concat("i");
      }
      re = new RegExp(finalFilterText, reFlags);
    } catch (err) {
      console.log("".concat(filterText, " is not a valid regex"));
      return [];
    }
  }
  var filteredRows = rows.filter(function (row, row_idx) {
    // We can change below to for loop to use early termination
    // Doesn't make much difference now as we use only one column
    var filteredCols = columnIds.filter(function (colId) {
      // console.log(`flagBlank=${flagBlank} filterText=${filterText}`);

      // If blank is set then look for blank match as well
      if (flagBlank) {
        if (!row.values[colId]) {
          return true;
        }
      }
      var finalCellText;
      if (flagText) {
        if (filterText) {
          if (row.values[colId]) {
            if (textFlags.regex || textFlags.caps || !isString(row.values[colId])) {
              finalCellText = valToString(row.values[colId]);
            } else {
              var _row$values$colId;
              finalCellText = (_row$values$colId = row.values[colId]) === null || _row$values$colId === void 0 ? void 0 : _row$values$colId.toLowerCase();
            }
            if (textFlags.regex) {
              // console.log(`finalCellText=${finalCellText} finalFilterText=${finalFilterText}`);
              var match = finalCellText.match(re);
              if (match) {
                return true;
              }
            } else {
              if (textFlags.full) {
                if (finalCellText === finalFilterText) return true;
              } else {
                // console.log(`finalCellText=${finalCellText} finalFilterText=${finalFilterText}`);
                if (finalCellText.includes(finalFilterText)) return true;
              }
            }
          }
        } else {
          return true;
        }
      }
      return false;
    });

    // console.log(`row:${row_idx} filteredCols=${JSON.stringify(filteredCols)}`);
    return filteredCols.length > 0;
  });

  // console.log(`Filtered Rows`, filteredRows);
  return filteredRows;
};

var TooltipComponent = function TooltipComponent(_ref) {
  var children = _ref.children,
    message = _ref.message,
    disabled = _ref.disabled;
  var renderTooltip = function renderTooltip(props) {
    return /*#__PURE__*/React$1.createElement(Tooltip, props, message);
  };
  if (disabled === true) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, children);
  }
  return /*#__PURE__*/React$1.createElement(OverlayTrigger, {
    placement: "top",
    overlay: renderTooltip
  }, children);
};
var TooltipComponent$1 = /*#__PURE__*/React$1.memo(TooltipComponent);

// Supports:
//  - Rows Selection
//  - Edit cells using input and select

var TableCore = function TableCore() {
  var _useContext = useContext(TableDataContext),
    data = _useContext.data,
    columns = _useContext.columns,
    headersMap = _useContext.headersMap,
    updateData = _useContext.onChange,
    featureSelection = _useContext.featureSelection,
    featureGlobalFilter = _useContext.featureGlobalFilter,
    featureEdit = _useContext.featureEdit,
    featurePagination = _useContext.featurePagination,
    featureColumnFilter = _useContext.featureColumnFilter,
    featureSorting = _useContext.featureSorting,
    layoutFooter = _useContext.layoutFooter,
    layoutFixed = _useContext.layoutFixed,
    layoutResize = _useContext.layoutResize,
    layoutHeaderTooltip = _useContext.layoutHeaderTooltip,
    layoutShowHeaderTypes = _useContext.layoutShowHeaderTypes,
    updateSelection = _useContext.onSelectionChange,
    updateRTable = _useContext.onRTableChange,
    updatePageIndex = _useContext.onPageChange,
    updatePageSize = _useContext.onPageSizeChange,
    getCurrentPageIndex = _useContext.getPageIndex,
    getGlobalFilter = _useContext.getGlobalFilter,
    getColumnsFilters = _useContext.getColumnsFilters,
    updateVisibleColumns = _useContext.onVisibleColumnsChange;
  // console.log(`<TableCore>: data.length=${data.length} columns.length=${columns.length}`);
  // console.log(JSON.stringify(columns, null, 2));

  // For debugging purpose
  useEffect(function () {
    return function () {
    };
  }, []);
  var usePrepareColumn = useCallback(function (hooks) {
    // Support row select
    var selectionColumn = {
      id: "selection",
      Header: function Header(_ref) {
        var getToggleAllRowsSelectedProps = _ref.getToggleAllRowsSelectedProps;
        return /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement(RowCheckbox, getToggleAllRowsSelectedProps()));
      },
      Cell: function Cell(_ref2) {
        var row = _ref2.row;
        return /*#__PURE__*/React$1.createElement("div", {
          style: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }
        }, /*#__PURE__*/React$1.createElement(RowCheckbox, row.getToggleRowSelectedProps()));
      },
      enableAddons: false,
      enableSorting: false,
      width: 50
    };
    hooks.visibleColumns.push(function (paramColumns) {
      var headColumns = featureSelection ? [selectionColumn] : [];
      if (featureEdit) {
        return headColumns.concat(_toConsumableArray(paramColumns.map(function (col) {
          if (col.edit) {
            if (col.type === 'input') {
              // The following is equivalent to col.Cell = EditableCell
              // We have kept it for uniformity
              col.Cell = function (props) {
                return /*#__PURE__*/React$1.createElement(EditableControlledCell, props);
              };
            } else if (col.type === 'select') {
              col.Cell = function (props) {
                var rows = props.rows,
                  page = props.page,
                  row = props.row;
                // Add a check for featurePagination
                var view = rows;
                if (page) {
                  view = page;
                }

                // To take care of the cases where last has lesser number of rows.
                var topThreshold = 5;
                var positionInView = view.findIndex(function (item) {
                  return item.index === row.index;
                });
                var placement = positionInView > topThreshold ? "top" : "bottom";
                return /*#__PURE__*/React$1.createElement(SelectableCell, _extends({
                  choices: col.choices
                }, props, {
                  placement: placement
                }));
              };
            } else {
              // If not type is specified then input by default
              col.Cell = EditableControlledCell;
            }
          }
          return col;
        })));
      } else {
        return headColumns.concat(_toConsumableArray(paramColumns));
      }
    });
  }, [featureSelection, featureEdit]);
  var pluginHooks = useMemo(function () {
    var hooks = [];
    if (featureGlobalFilter) {
      hooks.push(useGlobalFilter);
    }
    if (featureColumnFilter) {
      hooks.push(useFilters);
    }
    if (featureSorting) {
      hooks.push(useSortBy);
    }
    if (featurePagination) {
      hooks.push(usePagination);
    }
    if (featureSelection) {
      hooks.push(useRowSelect);
    }
    if (layoutFixed) {
      hooks.push(useBlockLayout);
    }
    if (layoutResize) {
      hooks.push(useResizeColumns);
    }
    hooks.push(usePrepareColumn);
    return hooks;
  }, [featureSelection, featureGlobalFilter, featureEdit, featurePagination]);
  var currentPageIndex = useMemo(function () {
    return getCurrentPageIndex();
  }, [getCurrentPageIndex]);

  // console.log(`<TableCore>: currentPageIndex:${currentPageIndex}`);

  var defaultColumnAttrs = useMemo(function () {
    var attrs = {};
    if (featureColumnFilter) {
      attrs = {
        Filter: ColumnFilterWithIcon,
        filter: filterUsingRegex
      };
    }
    if (layoutFixed || layoutResize) {
      attrs = _objectSpread2(_objectSpread2({}, attrs), {
        // maxWidth: 300,
        // minWidth: 100,
        // width: 125,
      });
    }

    // console.log(`defaultColumnAttrs=`, attrs);
    return attrs;
  }, [featureSelection]);
  var hiddenColumns = useMemo(function () {
    return columns.map(function (col) {
      if (col.hidden === true) {
        // console.log(`empty column = ${JSON.stringify(col, null, 2)}`);
        // console.log(`returning ${ col.id}`);

        return col.id;
      }
    });
  }, [columns]);
  var globalFilter = useMemo(function () {
    return getGlobalFilter();
  }, [getGlobalFilter]);
  var columnsFilters = useMemo(function () {
    return getColumnsFilters();
  }, [getColumnsFilters]);
  var initialState = useMemo(function () {
    var initState = {};

    // The hidden columns
    initState = _objectSpread2(_objectSpread2({}, initState), {}, {
      hiddenColumns: hiddenColumns
    });
    if (featurePagination) {
      initState = _objectSpread2(_objectSpread2({}, initState), {}, {
        pageIndex: currentPageIndex
      });
    }
    if (featureGlobalFilter) {
      initState = _objectSpread2(_objectSpread2({}, initState), {}, {
        globalFilter: globalFilter
      });
    }
    if (featureColumnFilter) {
      // console.log(`TableCore:columnsFilters`, columnsFilters);
      initState = _objectSpread2(_objectSpread2({}, initState), {}, {
        filters: columnsFilters
      });
    }
    return initState;
  }, [currentPageIndex, hiddenColumns, globalFilter, columnsFilters]);
  var tableInstance = useTable.apply(void 0, [{
    columns: columns,
    data: data,
    updateData: updateData,
    autoResetSelectedRows: false,
    initialState: initialState,
    defaultColumn: defaultColumnAttrs
  }].concat(_toConsumableArray(pluginHooks)));
  var getTableProps = tableInstance.getTableProps,
    getTableBodyProps = tableInstance.getTableBodyProps,
    headerGroups = tableInstance.headerGroups,
    footerGroups = tableInstance.footerGroups,
    rows = tableInstance.rows,
    prepareRow = tableInstance.prepareRow,
    selectedFlatRows = tableInstance.selectedFlatRows,
    page = tableInstance.page,
    gotoPage = tableInstance.gotoPage,
    state = tableInstance.state,
    visibleColumns = tableInstance.visibleColumns;
  var rowsPrevRef = useRef([]);
  var visibleRows = useMemo(function () {
    return featurePagination ? page : rows;
  }, [page, rows]);
  useEffect(function () {
    if (rows.length != rowsPrevRef.current.length) {
      // console.log(`TableCore:rows prevRowCount:${rowsPrevRef.current.length} count=${rows.length}`)
      if (featurePagination) {
        if (currentPageIndex > 0) {
          // console.log(`TableCore: Page index reset to 0`);
          setTimeout(function () {
            gotoPage(0);
          }, 0);
        }
      }
    }
    rowsPrevRef.current = rows;
  }, [rows, currentPageIndex, gotoPage]);
  // console.log(`tableInstance=`, tableInstance);

  useEffect(function () {
    // console.log(`visibleColumns=`, visibleColumns);
    updateVisibleColumns(visibleColumns);
  }, [visibleColumns]);
  var pageIndex = state.pageIndex,
    pageSize = state.pageSize;
  useEffect(function () {
    updatePageIndex(pageIndex);
    updatePageSize(pageSize);
  }, [pageIndex, pageSize]);

  // Note: Causes a rerender
  // Required for rerendering the BulkSelection component
  useEffect(function () {
    updateSelection(selectedFlatRows);
  }, [selectedFlatRows]);
  useEffect(function () {
    // console.log(`Updated tableInstance`);
    updateRTable(tableInstance);
  }, [tableInstance]);
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("table", getTableProps(), /*#__PURE__*/React$1.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React$1.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (hdrColumn) {
      var _JSON$stringify, _headersMap$hdrColumn;
      return (
        /*#__PURE__*/
        //  If we want header to be clickable then modify getHeaderProps call as 
        //  getHeaderProps(featureSorting ? hdrColumn.getSortByToggleProps() : {})
        React$1.createElement("th", hdrColumn.getHeaderProps(), /*#__PURE__*/React$1.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column"
          }
        }, /*#__PURE__*/React$1.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px"
          }
        }, /*#__PURE__*/React$1.createElement("div", {
          style: {
            width: "100%"
            // border: "1px dashed white"
          }
        }, /*#__PURE__*/React$1.createElement(TooltipComponent$1, {
          message: hdrColumn.render('Header'),
          disabled: !layoutHeaderTooltip || hdrColumn.enableAddons === false
        }, /*#__PURE__*/React$1.createElement("span", {
          style: {
            whiteSpace: "nowrap"
          }
        }, hdrColumn.render('Header')))), hdrColumn.enableAddons !== false && /*#__PURE__*/React$1.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            alignItems: "center"
          }
        }, featureSorting && hdrColumn.enableSorting !== false && /*#__PURE__*/React$1.createElement("span", hdrColumn.getSortByToggleProps(), hdrColumn.isSorted ? hdrColumn.isSortedDesc ? ' >' : ' <' : '<>'), featureColumnFilter && /*#__PURE__*/React$1.createElement("span", null, hdrColumn.canFilter ? hdrColumn.render('Filter') : null), layoutResize && /*#__PURE__*/React$1.createElement("div", _extends({}, hdrColumn.getResizerProps(), {
          className: "resizer ".concat(hdrColumn.isResizing ? "isResizing" : "")
        })))), layoutShowHeaderTypes && /*#__PURE__*/React$1.createElement("div", {
          style: {
            fontSize: "0.7em",
            "fontWeight": "normal"
          }
        }, (_JSON$stringify = JSON.stringify((_headersMap$hdrColumn = headersMap[hdrColumn.header]) === null || _headersMap$hdrColumn === void 0 ? void 0 : _headersMap$hdrColumn.detectedTypes)) === null || _JSON$stringify === void 0 ? void 0 : _JSON$stringify.replaceAll('"', ''))))
      );
    }));
  })), /*#__PURE__*/React$1.createElement("tbody", getTableBodyProps(), visibleRows.map(function (row) {
    prepareRow(row);
    return /*#__PURE__*/React$1.createElement("tr", row.getRowProps(), row.cells.map(function (cell) {
      return /*#__PURE__*/React$1.createElement("td", cell.getCellProps(), cell.render('Cell'));
    }));
  })), /*#__PURE__*/React$1.createElement("tfoot", null, layoutFooter && footerGroups.map(function (footerGroup) {
    return /*#__PURE__*/React$1.createElement("tr", footerGroup.getFooterGroupProps(), footerGroup.headers.map(function (column) {
      return /*#__PURE__*/React$1.createElement("td", column.getFooterProps(), column.render('Footer'));
    }));
  }))));
};

// export default TableCore;

// We use React.memo when we want to render the child only when any props change
var TableCore$1 = /*#__PURE__*/React$1.memo(TableCore);

var GlobalFilter = function GlobalFilter(_ref) {
  var globalFilter = _ref.globalFilter,
    setGlobalFilter = _ref.setGlobalFilter;
  // console.log(`Rendering <GlobalFilter>: filter=${filter}`);

  var _useState = useState(globalFilter || ""),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _onChange = useAsyncDebounce(function (val) {
    // console.log(`GlobalFilter: val=${val}`);
    setGlobalFilter(val);
  }, 100);

  // If the value changes from outside
  useEffect(function () {
    // console.log(`filter=${filter}`);
    setValue(globalFilter || "");
  }, [globalFilter]);
  return /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React$1.createElement("span", null, "Search"), /*#__PURE__*/React$1.createElement("input", {
    className: "form-control",
    value: value,
    onChange: function onChange(e) {
      setValue(e.target.value);
      _onChange(e.target.value);
    },
    style: {
      padding: "4px"
    }
  }));
};

var GlobalFilterSection = function GlobalFilterSection() {
  useEffect(function () {
    return function () {
    };
  }, []);
  var _useContext = useContext(TableDataContext),
    state = _useContext.state,
    setGlobalFilter = _useContext.setGlobalFilter,
    updateGlobalFilter = _useContext.onGlobalFilterChange;
  var globalFilter = state === null || state === void 0 ? void 0 : state.globalFilter;

  // This is important. The updated value is stored in the TableWrapper.
  // It is provided to TableCore upon re-render.
  useEffect(function () {
    // console.log(`Global Filter: ${globalFilter}`)
    updateGlobalFilter(globalFilter);
  }, [globalFilter]);

  // We need to reset the pageIndex to 0 when we start typing in the filter
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement(GlobalFilter, {
    globalFilter: globalFilter,
    setGlobalFilter: setGlobalFilter
  }));
};
var GlobalFilterSection$1 = /*#__PURE__*/React$1.memo(GlobalFilterSection);

var PaginationSection = function PaginationSection() {
  useEffect(function () {
    return function () {
    };
  }, []);
  var _useContext = useContext(TableDataContext),
    nextPage = _useContext.nextPage,
    previousPage = _useContext.previousPage,
    canNextPage = _useContext.canNextPage,
    canPreviousPage = _useContext.canPreviousPage,
    pageOptions = _useContext.pageOptions,
    gotoPage = _useContext.gotoPage,
    pageCount = _useContext.pageCount,
    setPageSize = _useContext.setPageSize,
    state = _useContext.state;
  var _ref = state || {},
    pageIndex = _ref.pageIndex,
    pageSize = _ref.pageSize;
  return /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement("span", null, "Page", ' ', /*#__PURE__*/React$1.createElement("strong", null, pageIndex + 1, " of ", pageOptions === null || pageOptions === void 0 ? void 0 : pageOptions.length), ' '), /*#__PURE__*/React$1.createElement("span", null, "| Go to page: ", ' ', /*#__PURE__*/React$1.createElement("input", {
    type: "number",
    value: (pageIndex || 0) + 1,
    onChange: function onChange(e) {
      var pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
      gotoPage(pageNumber);
    },
    style: {
      width: 50
    }
  })), /*#__PURE__*/React$1.createElement("select", {
    value: pageSize,
    onChange: function onChange(e) {
      return setPageSize(Number(e.target.value));
    }
  }, [10, 25, 50].map(function (pageSize) {
    return /*#__PURE__*/React$1.createElement("option", {
      key: pageSize,
      value: pageSize
    }, "Show ", pageSize);
  })), /*#__PURE__*/React$1.createElement("button", {
    onClick: function onClick() {
      return gotoPage(0);
    },
    disabled: !canPreviousPage
  }, '<<'), /*#__PURE__*/React$1.createElement("button", {
    onClick: function onClick() {
      return previousPage();
    },
    disabled: !canPreviousPage
  }, "Previous"), /*#__PURE__*/React$1.createElement("button", {
    onClick: function onClick() {
      return nextPage();
    },
    disabled: !canNextPage
  }, "Next"), /*#__PURE__*/React$1.createElement("button", {
    onClick: function onClick() {
      return gotoPage(pageCount - 1);
    },
    disabled: !canNextPage
  }, '>>'));
};

var ColumnVisibilitySection = function ColumnVisibilitySection() {
  useEffect(function () {
    return function () {
    };
  }, []);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showColumnsExpanded = _useState2[0],
    setShowColumnsExpanded = _useState2[1];
  var _useContext = useContext(TableDataContext),
    allColumns = _useContext.allColumns,
    getToggleHideAllColumnsProps = _useContext.getToggleHideAllColumnsProps;
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, allColumns && /*#__PURE__*/React$1.createElement("div", {
    style: {
      marginLeft: "20px"
    }
  }, /*#__PURE__*/React$1.createElement(ExpandableButton, {
    title: "Show Columns",
    expanded: showColumnsExpanded,
    onChange: setShowColumnsExpanded,
    popupPosition: {
      top: "100%",
      left: "0px"
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: "180px",
      padding: "10px",
      border: "1px dashed gray",
      borderRadius: "5px"
    }
  }, /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement(RowCheckbox, getToggleHideAllColumnsProps()), " Toggle All"),
  // Individual checkbox for hide/show column
  allColumns.map(function (column) {
    return /*#__PURE__*/React$1.createElement("div", {
      key: column.id
    }, /*#__PURE__*/React$1.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center"
      }
    }, /*#__PURE__*/React$1.createElement("input", _extends({
      type: "checkbox"
    }, column.getToggleHiddenProps())), /*#__PURE__*/React$1.createElement("span", null, column.render('Header'))));
  })))));
};
var ColumnVisibilitySection$1 = /*#__PURE__*/React$1.memo(ColumnVisibilitySection);

// import AppContext from "../AppContext";

// We derive columns from data
// We will just convert the columns.
// Any modification of columns should be handled above this.

var TableWrapper = function TableWrapper(_ref) {
  var initialData = _ref.data,
    updateData = _ref.onDataChange,
    ledgers = _ref.ledgers;
  {
    console.log("Rendering <TableWrapper>");
  }

  // const {
  //   data:initialData,
  //   onDataChange: updateData,
  //   ledgers
  // } = useContext(AppContext);

  var _useState = useState(initialData),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];

  // const {state} = useLocation();

  // TBD: We should put this in the context as well
  // const headersMap = useMemo(() => state?.headersMap && JSON.parse(state?.headersMap), []);

  useEffect(function () {
    // console.log(`TableWrapper: initialData changed`);
    // console.log(appData);
    setData(initialData);
  }, [initialData]);

  // Data Features:
  // Update with commit
  var updateWithCommit = useMemo(function () {
    return false;
  }, []);
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    updates = _useState4[0],
    setUpdates = _useState4[1];

  // // Table Section

  // Used for re-rendering the table
  var tableKeyRef = useRef(1);
  var tableInstanceRef = useRef({});

  // Here we put features which affect each other
  // Here is the list:
  // 1. Bulk, Selection
  //    When a bulk operation is completed we need to reset the selected rows
  // 2. Filter, Pagination
  //    When we filter data the page numnber needs to be reset to 0.
  // 3. ColumnFilters, GlobalFilters
  //    When we clear filters we clear filters on both.
  var toggleAllRowsSelected = tableInstanceRef.current.toggleAllRowsSelected;

  // Table features:
  var _useState5 = useState(true),
    _useState6 = _slicedToArray(_useState5, 2),
    featureSelection = _useState6[0];
    _useState6[1];
  var _useState7 = useState(true),
    _useState8 = _slicedToArray(_useState7, 2),
    featureEdit = _useState8[0];
    _useState8[1];
  var _useState9 = useState(true),
    _useState10 = _slicedToArray(_useState9, 2),
    featureBulk = _useState10[0];
    _useState10[1];
  var _useState11 = useState(true),
    _useState12 = _slicedToArray(_useState11, 2),
    featureGlobalFilter = _useState12[0];
    _useState12[1];
  var _useState13 = useState(true),
    _useState14 = _slicedToArray(_useState13, 2),
    featurePagination = _useState14[0];
    _useState14[1];
  var _useState15 = useState(true),
    _useState16 = _slicedToArray(_useState15, 2),
    featureColumnFilter = _useState16[0];
    _useState16[1];
  var _useState17 = useState(true),
    _useState18 = _slicedToArray(_useState17, 2),
    featureSorting = _useState18[0];
    _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    featureColumnVisibility = _useState20[0];
    _useState20[1];
  var _useState21 = useState(true),
    _useState22 = _slicedToArray(_useState21, 2),
    layoutDebug = _useState22[0];
    _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    layoutShowTypes = _useState24[0];
    _useState24[1];
  var _useState25 = useState(false),
    _useState26 = _slicedToArray(_useState25, 2),
    layoutShowHeaderTypes = _useState26[0];
    _useState26[1];

  // We can't change following to ref as we need to rerender BulkSection
  var _useState27 = useState([]),
    _useState28 = _slicedToArray(_useState27, 2);
    _useState28[0];
    var setSelectedRows = _useState28[1];
  var _useState29 = useState(0),
    _useState30 = _slicedToArray(_useState29, 2),
    pageIndex = _useState30[0],
    setPageIndex = _useState30[1];
  var _useState31 = useState(10),
    _useState32 = _slicedToArray(_useState31, 2);
    _useState32[0];
    var setPageSize = _useState32[1];
  var globalFilterValueRef = useRef(undefined);
  var _useState33 = useState([]),
    _useState34 = _slicedToArray(_useState33, 2);
    _useState34[0];
    var setVisibleColumns = _useState34[1];

  // Store table position so that we can restore
  var tableScrollPositionRef = useRef(0);

  // console.log(`globalFilter='${globalFilterValueRef.current}'`);

  useEffect(function () {
    {
      console.log("<TableWrapper>: First render");
    }

    // console.log(`headersMap:`, headersMap);

    return function () {
      {
        console.log("<TableWrapper>: Destroyed");
      }
    };
  }, []);

  // col must have keyName property
  var attachPresetProperties = useCallback(function (col, index, choices) {
    var mPresetCols = presetColumns.filter(function (pcol) {
      return pcol.keyName === col.keyName;
    });
    col.index = index;
    if (mPresetCols.length) {
      col = mPresetCols[0];
      col.choices = choices;
    }
    return colToRTCol(col, {
      showTypes: layoutShowTypes
    });
  }, []);

  // The columns are derived from data only once.
  // We will change this behaviour in the future if needed.
  var columns = useMemo(function () {
    return getColumns(data);
  }, []);
  var selectables = useMemo(function () {
    // This is compile time mapping.
    // For future: Can we do this run time?
    return [{
      'keyName': 'category',
      'choices': ledgers ? ledgers.map(function (ledger) {
        return ledger.name;
      }) : []
    }];
  }, [ledgers]);
  var rtColumns = useMemo(function () {
    return columns.map(function (col, index) {
      var selIndex = selectables.findIndex(function (sel) {
        return sel.keyName === col.keyName;
      });
      var choices;
      if (selIndex >= 0) {
        choices = selectables[selIndex].choices;
      }
      return attachPresetProperties(col, index, choices);
    });
  }, [columns, selectables]);
  var defaultColumnFilterState = {
    flagBlank: false,
    flagText: true,
    filterText: "",
    textFlags: {}
  };
  var colFiltersInitState = useMemo(function () {
    return rtColumns.map(function (col) {
      // console.log(col);
      return {
        id: col.id,
        value: defaultColumnFilterState
      };
    });
  }, [rtColumns]);
  var columnFiltersValueRef = useRef(colFiltersInitState);

  // Keep this function as this is used for causing a render
  // Check the behaviour before and after in case this has to be deleted
  var handleSelectionUpdate = useCallback(function (seletedFlatRows) {
    // console.log(`handleSelectionUpdate: `, seletedFlatRows);
    setSelectedRows(seletedFlatRows);
  }, []);
  var handleRTableChange = useCallback(function (rt) {
    // console.log(`handleRTableChange: `, rt);
    tableInstanceRef.current = rt;
  }, []);

  // convert before using this to ids and patch
  var applyUpdate = useCallback(function (prevData, _ref2) {
    var action = _ref2.action,
      _ref2$payload = _ref2.payload,
      indices = _ref2$payload.indices,
      patch = _ref2$payload.patch;
    // console.log(`applyUpdate: action=${action}`);

    switch (action) {
      case PATCH:
        // Here we should mark pending
        var updatedData = prevData.map(function (item, item_idx) {
          if (indices.includes(item_idx)) {
            return _objectSpread2(_objectSpread2(_objectSpread2({}, item), patch), {}, {
              modifyMarker: true
            });
          }
          return _objectSpread2({}, item);
        });

        // console.log(`updatedData=${JSON.stringify(updatedData, null, 2)}`);
        return updatedData;
      case DELETE:
        // return prevData.filter((item, index) => !indices.includes(index))
        // Here we should mark for delete
        return prevData.map(function (item, item_idx) {
          if (indices.includes(item_idx)) {
            return _objectSpread2(_objectSpread2({}, item), {}, {
              deleteMarker: true
            });
          }
          return _objectSpread2({}, item);
        });
      default:
        return prevData;
    }
  }, []);
  var commitUpdates = useCallback(function (updates) {
    // Since data is updated on the previous state
    setData(function (prevData) {
      var newData = updates.reduce(function (pData, update, index) {
        return applyUpdate(pData, update);
      }, prevData);
      if (updateData) {
        setTimeout(function () {
          updateData(newData, updates, 'dataSourceTable');
        });
      }
      return newData;
    });
  }, [applyUpdate]);
  var handleCommitClick = useCallback(function (updates) {
    // console.log(`updates count: ${updates.length}`);
    if (updates.length < 1) {
      return;
    }
    commitUpdates(updates);
    setUpdates([]);

    // Reset the selection of rows
    if (toggleAllRowsSelected) {
      toggleAllRowsSelected(false);
    }
  }, [commitUpdates, toggleAllRowsSelected]);
  var handleDataChange = useCallback(function (action, indices, patch) {
    // console.log('handleDataChange:', action, indices, patch);

    var update = {
      action: action,
      payload: {
        indices: indices,
        patch: patch
      }
    };
    if (updateWithCommit) {
      setUpdates(function (prevUpdates) {
        return _toConsumableArray(prevUpdates).concat(update);
      });
    } else {
      commitUpdates([update]);

      // Reset the selection of rows
      if (toggleAllRowsSelected) {
        toggleAllRowsSelected(false);
      }
    }
  }, [commitUpdates, toggleAllRowsSelected]);
  var handleResetClick = useCallback(function (updates) {
    // setTableKey((prevTableKey) => prevTableKey + 1);
    tableKeyRef.current += 1;
    setUpdates([]);
  }, []);

  // TBD: we get these so that we can update the sibling component
  // See if we can avoid the whole re-render
  var handlePageChange = useCallback(function (pageIndex) {
    // console.log(`handlePageChange: ${pageIndex}`);
    setPageIndex(pageIndex);
  }, []);
  var handlePageSizeChange = useCallback(function (pageSize) {
    // console.log(`handlePageChange: ${pageIndex}`);
    setPageSize(pageSize);
  }, []);
  var providePageIndex = function providePageIndex() {
    // console.log(`providePageIndex: pageIndex=${pageIndex}`)
    return pageIndex;
  };

  // We need to fix the pageIndex when filtering starts
  var handleGlobalFilterChange = useCallback(function (value) {
    // console.log(`handleGlobalFilterChange: value=${value}`);

    if (featurePagination) {
      if (!globalFilterValueRef.current && value) ;
      if (globalFilterValueRef.current && !value) ;
    }
    globalFilterValueRef.current = value;
  }, [globalFilterValueRef]);
  var provideGlobalFilter = function provideGlobalFilter() {
    return globalFilterValueRef.current;
  };
  var handleColumnsFiltersChange = function handleColumnsFiltersChange(value) {
    console.log("TableWrapper:handleColumnsFiltersChange value:", value);
    columnFiltersValueRef.current = value;
  };

  // This is called from the ColumnFilterWithIcon component
  var handleColumnFilterChange = function handleColumnFilterChange(columnId, newValue) {
    // console.log(`TableWrapper:handleColumnFilterChange column=${columnId} newValue=`, newValue);
    var columnFilters = columnFiltersValueRef.current;
    if (newValue === undefined) {
      newValue = defaultColumnFilterState;
    }
    if (featurePagination) {
      var _columnFilters$filter, _newValue, _newValue2;
      var oldValue = (_columnFilters$filter = columnFilters.filter(function (col) {
        return col.id === columnId;
      })[0]) === null || _columnFilters$filter === void 0 ? void 0 : _columnFilters$filter.value;
      if ((oldValue === null || oldValue === void 0 ? void 0 : oldValue.filterText) === "" && ((_newValue = newValue) === null || _newValue === void 0 ? void 0 : _newValue.filterText) !== "") {
        console.log("handleColumnFilterChange: Filter active pulse");
      }
      if ((oldValue === null || oldValue === void 0 ? void 0 : oldValue.filterText) !== "" && ((_newValue2 = newValue) === null || _newValue2 === void 0 ? void 0 : _newValue2.filterText) === "") {
        console.log("handleColumnFilterChange: Filter inactive pulse");
      }
    }
    columnFiltersValueRef.current = columnFilters.map(function (col) {
      if (col.id === columnId) {
        return _objectSpread2(_objectSpread2({}, col), {}, {
          value: newValue
        });
      }
      return col;
    });
  };
  var provideColumnsFilters = function provideColumnsFilters() {
    return columnFiltersValueRef.current;
  };

  // TBV: Check if this can be in TableWrapper
  var handleFilterClearClick = function handleFilterClearClick() {
    // console.log(`Need to clear filters`);
    var _tableInstanceRef$cur = tableInstanceRef.current,
      setGlobalFilter = _tableInstanceRef$cur.setGlobalFilter,
      setAllFilters = _tableInstanceRef$cur.setAllFilters;
    setAllFilters([]);
    setGlobalFilter("");
  };
  var handleTableCoreScroll = function handleTableCoreScroll(e) {
    // console.log("scrolling!", e.target.scrollLeft)
    // setTablePosition(e.target.scrollLeft);
    tableScrollPositionRef.current = e.target.scrollLeft;
  };
  var handleVisibleColumnsChange = function handleVisibleColumnsChange(visibleColumns) {
    // console.log(`handleVisibleColumnsChange: called`);
    setVisibleColumns(visibleColumns);
  };
  var tableContext = {
    data: data,
    columns: rtColumns,
    // headersMap, // header(column in excel file) info
    onChange: handleDataChange,
    featureSelection: featureSelection,
    featureGlobalFilter: featureGlobalFilter,
    featureBulk: featureBulk,
    featureEdit: featureEdit,
    featurePagination: featurePagination,
    featureColumnFilter: featureColumnFilter,
    featureSorting: featureSorting,
    featureColumnVisibility: featureColumnVisibility,
    layoutFooter: false,
    layoutFixed: true,
    layoutResize: true,
    // dependent of layoutFixed
    layoutHeaderTooltip: true,
    layoutShowHeaderTypes: layoutShowHeaderTypes,
    layoutDebug: layoutDebug,
    tableInstance: tableInstanceRef.current,
    allColumns: tableInstanceRef.current.allColumns,
    getToggleHideAllColumnsProps: tableInstanceRef.current.getToggleHideAllColumnsProps,
    selectedFlatRows: tableInstanceRef.current.selectedFlatRows,
    toggleAllRowsSelected: tableInstanceRef.current.toggleAllRowsSelected,
    nextPage: tableInstanceRef.current.nextPage,
    previousPage: tableInstanceRef.current.previousPage,
    canNextPage: tableInstanceRef.current.canNextPage,
    canPreviousPage: tableInstanceRef.current.canPreviousPage,
    pageOptions: tableInstanceRef.current.pageOptions,
    gotoPage: tableInstanceRef.current.gotoPage,
    pageCount: tableInstanceRef.current.pageCount,
    setPageSize: tableInstanceRef.current.setPageSize,
    // state changes because of any of pagination, globalFilter, columnFilter will render all
    state: tableInstanceRef.current.state,
    setGlobalFilter: tableInstanceRef.current.setGlobalFilter,
    onSelectionChange: handleSelectionUpdate,
    onRTableChange: handleRTableChange,
    onPageChange: handlePageChange,
    onPageSizeChange: handlePageSizeChange,
    getPageIndex: providePageIndex,
    onGlobalFilterChange: handleGlobalFilterChange,
    getGlobalFilter: provideGlobalFilter,
    onColumnsFiltersChange: handleColumnsFiltersChange,
    onColumnFilterChange: handleColumnFilterChange,
    getColumnsFilters: provideColumnsFilters,
    onVisibleColumnsChange: handleVisibleColumnsChange
  };
  return /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: "95%",
      padding: "40px 20px",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.5)"
    }
  }, /*#__PURE__*/React$1.createElement(TableDataContext.Provider, {
    value: tableContext
  }, !data && /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React$1.createElement("h1", null, "Please upload an excel file")), data && /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      justifyContent: "space-evenly",
      alignItems: "center"
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'space-between',
      gap: "40px",
      width: "100%",
      padding: "0 40px"
    }
  }, featureBulk && /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement(BulkOperationsSection$1, {
    edit: featureEdit
  })), featureColumnVisibility && /*#__PURE__*/React$1.createElement(ColumnVisibilitySection$1, null), layoutDebug && /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "10px"
    }
  }, /*#__PURE__*/React$1.createElement(Button, {
    className: "btn-outline-info bg-transparent",
    size: "sm",
    onClick: function onClick(e) {
      rtColumns.forEach(function (col) {
        return console.log(JSON.stringify(col));
      });
    }
  }, "Log Columns"), /*#__PURE__*/React$1.createElement(Button, {
    className: "btn-outline-info bg-transparent",
    size: "sm",
    onClick: function onClick(e) {
      console.log(JSON.stringify(data, null, 2));
    }
  }, "Log Data")), /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "20px"
    }
  }, (featureGlobalFilter || featureColumnFilter) && /*#__PURE__*/React$1.createElement(Button, {
    className: "btn-outline-dark bg-transparent",
    size: "sm",
    onClick: handleFilterClearClick
  }, "Clear Filters"), featureGlobalFilter && /*#__PURE__*/React$1.createElement(GlobalFilterSection$1, null))), /*#__PURE__*/React$1.createElement("div", {
    style: {
      height: "60vh",
      width: "100%",
      padding: "10px 10px 20px 10px",
      overflow: "scroll",
      background: "darkgray"
    },
    onScroll: handleTableCoreScroll
  }, /*#__PURE__*/React$1.createElement(TableCore$1, {
    key: tableKeyRef.current
  })), featurePagination && /*#__PURE__*/React$1.createElement(PaginationSection, null), updateWithCommit && /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "20px"
    }
  }, /*#__PURE__*/React$1.createElement(Button, {
    className: "btn-outline-primary bg-transparent",
    disabled: updates.length < 1,
    onClick: function onClick(e) {
      return handleResetClick(updates);
    }
  }, "Reset"), /*#__PURE__*/React$1.createElement(Button, {
    disabled: updates.length < 1,
    onClick: function onClick(e) {
      return handleCommitClick(updates);
    }
  }, "Commit")))));
};

export { BasicTable, TableWrapper as FeatureTable, StyledTable };
