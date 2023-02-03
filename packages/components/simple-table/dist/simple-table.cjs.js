'use strict';

var React = require('react');

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

var _excluded$1 = ["style", "className"];
var renderErr = 'Renderer Error ☝️';
var actions = {
  init: 'init'
};
var defaultRenderer = function defaultRenderer(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value;
  return value;
};
var emptyRenderer = function emptyRenderer() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, "\xA0");
};
var defaultColumn = {
  Cell: defaultRenderer,
  width: 150,
  minWidth: 0,
  maxWidth: Number.MAX_SAFE_INTEGER
};
function mergeProps() {
  for (var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++) {
    propList[_key] = arguments[_key];
  }
  return propList.reduce(function (props, next) {
    var style = next.style,
      className = next.className,
      rest = _objectWithoutProperties(next, _excluded$1);
    props = _objectSpread2(_objectSpread2({}, props), rest);
    if (style) {
      props.style = props.style ? _objectSpread2(_objectSpread2({}, props.style || {}), style || {}) : style;
    }
    if (className) {
      props.className = props.className ? props.className + ' ' + className : className;
    }
    if (props.className === '') {
      delete props.className;
    }
    return props;
  }, {});
}
function handlePropGetter(prevProps, userProps, meta) {
  // Handle a lambda, pass it the previous props
  if (typeof userProps === 'function') {
    return handlePropGetter({}, userProps(prevProps, meta));
  }

  // Handle an array, merge each item as separate props
  if (Array.isArray(userProps)) {
    return mergeProps.apply(void 0, [prevProps].concat(_toConsumableArray(userProps)));
  }

  // Handle an object by default, merge the two objects
  return mergeProps(prevProps, userProps);
}
var makePropGetter = function makePropGetter(hooks) {
  var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function () {
    var userProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return [].concat(_toConsumableArray(hooks), [userProps]).reduce(function (prev, next) {
      return handlePropGetter(prev, next, _objectSpread2(_objectSpread2({}, meta), {}, {
        userProps: userProps
      }));
    }, {});
  };
};
var reduceHooks = function reduceHooks(hooks, initial) {
  var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var allowUndefined = arguments.length > 3 ? arguments[3] : undefined;
  return hooks.reduce(function (prev, next) {
    var nextValue = next(prev, meta);
    if (process.env.NODE_ENV !== 'production') {
      if (!allowUndefined && typeof nextValue === 'undefined') {
        console.info(next);
        throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
      }
    }
    return nextValue;
  }, initial);
};
var loopHooks = function loopHooks(hooks, context) {
  var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return hooks.forEach(function (hook) {
    var nextValue = hook(context, meta);
    if (process.env.NODE_ENV !== 'production') {
      if (typeof nextValue !== 'undefined') {
        console.info(hook, nextValue);
        throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
      }
    }
  });
};
function functionalUpdate(updater, old) {
  return typeof updater === 'function' ? updater(old) : updater;
}
function useGetLatest(obj) {
  var ref = React.useRef();
  ref.current = obj;
  return React.useCallback(function () {
    return ref.current;
  }, []);
}

// SSR has issues with useLayoutEffect still, so use useEffect during SSR
var safeUseLayoutEffect = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
function useMountedLayoutEffect(fn, deps) {
  var mountedRef = React.useRef(false);
  safeUseLayoutEffect(function () {
    if (mountedRef.current) {
      fn();
    }
    mountedRef.current = true;
    // eslint-disable-next-line
  }, deps);
}
function makeRenderer(instance, column) {
  var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function (type) {
    var userProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var Comp = typeof type === 'string' ? column[type] : type;
    if (typeof Comp === 'undefined') {
      console.info(column);
      throw new Error(renderErr);
    }
    return flexRender(Comp, _objectSpread2(_objectSpread2(_objectSpread2({}, instance), {}, {
      column: column
    }, meta), userProps));
  };
}
function flexRender(Comp, props) {
  return isReactComponent(Comp) ? /*#__PURE__*/React.createElement(Comp, props) : Comp;
}
function isReactComponent(component) {
  return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
}
function isClassComponent(component) {
  return typeof component === 'function' && function () {
    var proto = Object.getPrototypeOf(component);
    return proto.prototype && proto.prototype.isReactComponent;
  }();
}
function isExoticComponent(component) {
  return _typeof(component) === 'object' && _typeof(component.$$typeof) === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
}

// Build the visible columns, headers and flat column list
function linkColumnStructure(columns, parent) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return columns.map(function (column) {
    column = _objectSpread2(_objectSpread2({}, column), {}, {
      parent: parent,
      depth: depth
    });
    assignColumnAccessor(column);
    if (column.columns) {
      column.columns = linkColumnStructure(column.columns, column, depth + 1);
    }
    return column;
  });
}
function flattenColumns(columns) {
  return flattenBy(columns, 'columns');
}
function assignColumnAccessor(column) {
  // First check for string accessor
  var id = column.id,
    accessor = column.accessor,
    Header = column.Header;
  if (typeof accessor === 'string') {
    id = id || accessor;
    var accessorPath = accessor.split('.');
    accessor = function accessor(row) {
      return getBy(row, accessorPath);
    };
  }
  if (!id && typeof Header === 'string' && Header) {
    id = Header;
  }
  if (!id && column.columns) {
    console.error(column);
    throw new Error('A column ID (or unique "Header" value) is required!');
  }
  if (!id) {
    console.error(column);
    throw new Error('A column ID (or string accessor) is required!');
  }
  Object.assign(column, {
    id: id,
    accessor: accessor
  });
  return column;
}
function decorateColumn(column, userDefaultColumn) {
  if (!userDefaultColumn) {
    throw new Error();
  }
  Object.assign(column, _objectSpread2(_objectSpread2(_objectSpread2({
    // Make sure there is a fallback header, just in case
    Header: emptyRenderer,
    Footer: emptyRenderer
  }, defaultColumn), userDefaultColumn), column));
  Object.assign(column, {
    originalWidth: column.width
  });
  return column;
}

// Build the header groups from the bottom up
function makeHeaderGroups(allColumns, defaultColumn) {
  var additionalHeaderProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return {};
  };
  var headerGroups = [];
  var scanColumns = allColumns;
  var uid = 0;
  var getUID = function getUID() {
    return uid++;
  };
  var _loop = function _loop() {
    // The header group we are creating
    var headerGroup = {
      headers: []
    };

    // The parent columns we're going to scan next
    var parentColumns = [];
    var hasParents = scanColumns.some(function (d) {
      return d.parent;
    });

    // Scan each column for parents
    scanColumns.forEach(function (column) {
      // What is the latest (last) parent column?
      var latestParentColumn = [].concat(parentColumns).reverse()[0];
      var newParent;
      if (hasParents) {
        // If the column has a parent, add it if necessary
        if (column.parent) {
          newParent = _objectSpread2(_objectSpread2({}, column.parent), {}, {
            originalId: column.parent.id,
            id: "".concat(column.parent.id, "_").concat(getUID()),
            headers: [column]
          }, additionalHeaderProperties(column));
        } else {
          // If other columns have parents, we'll need to add a place holder if necessary
          var originalId = "".concat(column.id, "_placeholder");
          newParent = decorateColumn(_objectSpread2({
            originalId: originalId,
            id: "".concat(column.id, "_placeholder_").concat(getUID()),
            placeholderOf: column,
            headers: [column]
          }, additionalHeaderProperties(column)), defaultColumn);
        }

        // If the resulting parent columns are the same, just add
        // the column and increment the header span
        if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) {
          latestParentColumn.headers.push(column);
        } else {
          parentColumns.push(newParent);
        }
      }
      headerGroup.headers.push(column);
    });
    headerGroups.push(headerGroup);

    // Start scanning the parent columns
    scanColumns = parentColumns;
  };
  while (scanColumns.length) {
    _loop();
  }
  return headerGroups.reverse();
}
var pathObjCache = new Map();
function getBy(obj, path, def) {
  if (!path) {
    return obj;
  }
  var cacheKey = typeof path === 'function' ? path : JSON.stringify(path);
  var pathObj = pathObjCache.get(cacheKey) || function () {
    var pathObj = makePathArray(path);
    pathObjCache.set(cacheKey, pathObj);
    return pathObj;
  }();
  var val;
  try {
    val = pathObj.reduce(function (cursor, pathPart) {
      return cursor[pathPart];
    }, obj);
  } catch (e) {
    // continue regardless of error
  }
  return typeof val !== 'undefined' ? val : def;
}
function flattenBy(arr, key) {
  var flat = [];
  var recurse = function recurse(arr) {
    arr.forEach(function (d) {
      if (!d[key]) {
        flat.push(d);
      } else {
        recurse(d[key]);
      }
    });
  };
  recurse(arr);
  return flat;
}
function unpreparedAccessWarning() {
  throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
}

//

var reOpenBracket = /\[/g;
var reCloseBracket = /\]/g;
function makePathArray(obj) {
  return flattenDeep(obj)
  // remove all periods in parts
  .map(function (d) {
    return String(d).replace('.', '_');
  })
  // join parts using period
  .join('.')
  // replace brackets with periods
  .replace(reOpenBracket, '.').replace(reCloseBracket, '')
  // split it back out on periods
  .split('.');
}
function flattenDeep(arr) {
  var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (!Array.isArray(arr)) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < arr.length; i += 1) {
      flattenDeep(arr[i], newArr);
    }
  }
  return newArr;
}

var defaultGetTableProps = function defaultGetTableProps(props) {
  return _objectSpread2({
    role: 'table'
  }, props);
};
var defaultGetTableBodyProps = function defaultGetTableBodyProps(props) {
  return _objectSpread2({
    role: 'rowgroup'
  }, props);
};
var defaultGetHeaderProps = function defaultGetHeaderProps(props, _ref) {
  var column = _ref.column;
  return _objectSpread2({
    key: "header_".concat(column.id),
    colSpan: column.totalVisibleHeaderCount,
    role: 'columnheader'
  }, props);
};
var defaultGetFooterProps = function defaultGetFooterProps(props, _ref2) {
  var column = _ref2.column;
  return _objectSpread2({
    key: "footer_".concat(column.id),
    colSpan: column.totalVisibleHeaderCount
  }, props);
};
var defaultGetHeaderGroupProps = function defaultGetHeaderGroupProps(props, _ref3) {
  var index = _ref3.index;
  return _objectSpread2({
    key: "headerGroup_".concat(index),
    role: 'row'
  }, props);
};
var defaultGetFooterGroupProps = function defaultGetFooterGroupProps(props, _ref4) {
  var index = _ref4.index;
  return _objectSpread2({
    key: "footerGroup_".concat(index)
  }, props);
};
var defaultGetRowProps = function defaultGetRowProps(props, _ref5) {
  var row = _ref5.row;
  return _objectSpread2({
    key: "row_".concat(row.id),
    role: 'row'
  }, props);
};
var defaultGetCellProps = function defaultGetCellProps(props, _ref6) {
  var cell = _ref6.cell;
  return _objectSpread2({
    key: "cell_".concat(cell.row.id, "_").concat(cell.column.id),
    role: 'cell'
  }, props);
};
function makeDefaultPluginHooks() {
  return {
    useOptions: [],
    stateReducers: [],
    useControlledState: [],
    columns: [],
    columnsDeps: [],
    allColumns: [],
    allColumnsDeps: [],
    accessValue: [],
    materializedColumns: [],
    materializedColumnsDeps: [],
    useInstanceAfterData: [],
    visibleColumns: [],
    visibleColumnsDeps: [],
    headerGroups: [],
    headerGroupsDeps: [],
    useInstanceBeforeDimensions: [],
    useInstance: [],
    prepareRow: [],
    getTableProps: [defaultGetTableProps],
    getTableBodyProps: [defaultGetTableBodyProps],
    getHeaderGroupProps: [defaultGetHeaderGroupProps],
    getFooterGroupProps: [defaultGetFooterGroupProps],
    getHeaderProps: [defaultGetHeaderProps],
    getFooterProps: [defaultGetFooterProps],
    getRowProps: [defaultGetRowProps],
    getCellProps: [defaultGetCellProps],
    useFinalInstance: []
  };
}

actions.resetHiddenColumns = 'resetHiddenColumns';
actions.toggleHideColumn = 'toggleHideColumn';
actions.setHiddenColumns = 'setHiddenColumns';
actions.toggleHideAllColumns = 'toggleHideAllColumns';
var useColumnVisibility = function useColumnVisibility(hooks) {
  hooks.getToggleHiddenProps = [defaultGetToggleHiddenProps];
  hooks.getToggleHideAllColumnsProps = [defaultGetToggleHideAllColumnsProps];
  hooks.stateReducers.push(reducer);
  hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
  hooks.headerGroupsDeps.push(function (deps, _ref) {
    var instance = _ref.instance;
    return [].concat(_toConsumableArray(deps), [instance.state.hiddenColumns]);
  });
  hooks.useInstance.push(useInstance);
};
useColumnVisibility.pluginName = 'useColumnVisibility';
var defaultGetToggleHiddenProps = function defaultGetToggleHiddenProps(props, _ref2) {
  var column = _ref2.column;
  return [props, {
    onChange: function onChange(e) {
      column.toggleHidden(!e.target.checked);
    },
    style: {
      cursor: 'pointer'
    },
    checked: column.isVisible,
    title: 'Toggle Column Visible'
  }];
};
var defaultGetToggleHideAllColumnsProps = function defaultGetToggleHideAllColumnsProps(props, _ref3) {
  var instance = _ref3.instance;
  return [props, {
    onChange: function onChange(e) {
      instance.toggleHideAllColumns(!e.target.checked);
    },
    style: {
      cursor: 'pointer'
    },
    checked: !instance.allColumnsHidden && !instance.state.hiddenColumns.length,
    title: 'Toggle All Columns Hidden',
    indeterminate: !instance.allColumnsHidden && instance.state.hiddenColumns.length
  }];
};
function reducer(state, action, previousState, instance) {
  if (action.type === actions.init) {
    return _objectSpread2({
      hiddenColumns: []
    }, state);
  }
  if (action.type === actions.resetHiddenColumns) {
    return _objectSpread2(_objectSpread2({}, state), {}, {
      hiddenColumns: instance.initialState.hiddenColumns || []
    });
  }
  if (action.type === actions.toggleHideColumn) {
    var should = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.includes(action.columnId);
    var hiddenColumns = should ? [].concat(_toConsumableArray(state.hiddenColumns), [action.columnId]) : state.hiddenColumns.filter(function (d) {
      return d !== action.columnId;
    });
    return _objectSpread2(_objectSpread2({}, state), {}, {
      hiddenColumns: hiddenColumns
    });
  }
  if (action.type === actions.setHiddenColumns) {
    return _objectSpread2(_objectSpread2({}, state), {}, {
      hiddenColumns: functionalUpdate(action.value, state.hiddenColumns)
    });
  }
  if (action.type === actions.toggleHideAllColumns) {
    var shouldAll = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.length;
    return _objectSpread2(_objectSpread2({}, state), {}, {
      hiddenColumns: shouldAll ? instance.allColumns.map(function (d) {
        return d.id;
      }) : []
    });
  }
}
function useInstanceBeforeDimensions(instance) {
  var headers = instance.headers,
    hiddenColumns = instance.state.hiddenColumns;
  var isMountedRef = React.useRef(false);
  if (!isMountedRef.current) ;
  var handleColumn = function handleColumn(column, parentVisible) {
    column.isVisible = parentVisible && !hiddenColumns.includes(column.id);
    var totalVisibleHeaderCount = 0;
    if (column.headers && column.headers.length) {
      column.headers.forEach(function (subColumn) {
        return totalVisibleHeaderCount += handleColumn(subColumn, column.isVisible);
      });
    } else {
      totalVisibleHeaderCount = column.isVisible ? 1 : 0;
    }
    column.totalVisibleHeaderCount = totalVisibleHeaderCount;
    return totalVisibleHeaderCount;
  };
  var totalVisibleHeaderCount = 0;
  headers.forEach(function (subHeader) {
    return totalVisibleHeaderCount += handleColumn(subHeader, true);
  });
}
function useInstance(instance) {
  var columns = instance.columns,
    flatHeaders = instance.flatHeaders,
    dispatch = instance.dispatch,
    allColumns = instance.allColumns,
    getHooks = instance.getHooks,
    hiddenColumns = instance.state.hiddenColumns,
    _instance$autoResetHi = instance.autoResetHiddenColumns,
    autoResetHiddenColumns = _instance$autoResetHi === void 0 ? true : _instance$autoResetHi;
  var getInstance = useGetLatest(instance);
  var allColumnsHidden = allColumns.length === hiddenColumns.length;
  var toggleHideColumn = React.useCallback(function (columnId, value) {
    return dispatch({
      type: actions.toggleHideColumn,
      columnId: columnId,
      value: value
    });
  }, [dispatch]);
  var setHiddenColumns = React.useCallback(function (value) {
    return dispatch({
      type: actions.setHiddenColumns,
      value: value
    });
  }, [dispatch]);
  var toggleHideAllColumns = React.useCallback(function (value) {
    return dispatch({
      type: actions.toggleHideAllColumns,
      value: value
    });
  }, [dispatch]);
  var getToggleHideAllColumnsProps = makePropGetter(getHooks().getToggleHideAllColumnsProps, {
    instance: getInstance()
  });
  flatHeaders.forEach(function (column) {
    column.toggleHidden = function (value) {
      dispatch({
        type: actions.toggleHideColumn,
        columnId: column.id,
        value: value
      });
    };
    column.getToggleHiddenProps = makePropGetter(getHooks().getToggleHiddenProps, {
      instance: getInstance(),
      column: column
    });
  });
  var getAutoResetHiddenColumns = useGetLatest(autoResetHiddenColumns);
  useMountedLayoutEffect(function () {
    if (getAutoResetHiddenColumns()) {
      dispatch({
        type: actions.resetHiddenColumns
      });
    }
  }, [dispatch, columns]);
  Object.assign(instance, {
    allColumnsHidden: allColumnsHidden,
    toggleHideColumn: toggleHideColumn,
    setHiddenColumns: setHiddenColumns,
    toggleHideAllColumns: toggleHideAllColumns,
    getToggleHideAllColumnsProps: getToggleHideAllColumnsProps
  });
}

var _excluded = ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"];
var defaultInitialState = {};
var defaultColumnInstance = {};
var defaultReducer = function defaultReducer(state, action, prevState) {
  return state;
};
var defaultGetSubRows = function defaultGetSubRows(row, index) {
  return row.subRows || [];
};
var defaultGetRowId = function defaultGetRowId(row, index, parent) {
  return "".concat(parent ? [parent.id, index].join('.') : index);
};
var defaultUseControlledState = function defaultUseControlledState(d) {
  return d;
};
function applyDefaults(props) {
  var _props$initialState = props.initialState,
    initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState,
    _props$defaultColumn = props.defaultColumn,
    defaultColumn = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn,
    _props$getSubRows = props.getSubRows,
    getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows,
    _props$getRowId = props.getRowId,
    getRowId = _props$getRowId === void 0 ? defaultGetRowId : _props$getRowId,
    _props$stateReducer = props.stateReducer,
    stateReducer = _props$stateReducer === void 0 ? defaultReducer : _props$stateReducer,
    _props$useControlledS = props.useControlledState,
    useControlledState = _props$useControlledS === void 0 ? defaultUseControlledState : _props$useControlledS,
    rest = _objectWithoutProperties(props, _excluded);
  return _objectSpread2(_objectSpread2({}, rest), {}, {
    initialState: initialState,
    defaultColumn: defaultColumn,
    getSubRows: getSubRows,
    getRowId: getRowId,
    stateReducer: stateReducer,
    useControlledState: useControlledState
  });
}
var useTable = function useTable(props) {
  for (var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    plugins[_key - 1] = arguments[_key];
  }
  // Apply default props
  props = applyDefaults(props);

  // Add core plugins
  plugins = [useColumnVisibility].concat(_toConsumableArray(plugins));

  // Create the table instance
  var instanceRef = React.useRef({});

  // Create a getter for the instance (helps avoid a lot of potential memory leaks)
  var getInstance = useGetLatest(instanceRef.current);

  // Assign the props, plugins and hooks to the instance
  Object.assign(getInstance(), _objectSpread2(_objectSpread2({}, props), {}, {
    plugins: plugins,
    hooks: makeDefaultPluginHooks()
  }));

  // Allow plugins to register hooks as early as possible
  plugins.filter(Boolean).forEach(function (plugin) {
    plugin(getInstance().hooks);
  });

  // Consume all hooks and make a getter for them
  var getHooks = useGetLatest(getInstance().hooks);
  getInstance().getHooks = getHooks;
  delete getInstance().hooks;

  // Allow useOptions hooks to modify the options coming into the table
  Object.assign(getInstance(), reduceHooks(getHooks().useOptions, applyDefaults(props)));
  var _getInstance = getInstance(),
    data = _getInstance.data,
    userColumns = _getInstance.columns,
    initialState = _getInstance.initialState,
    defaultColumn = _getInstance.defaultColumn,
    getSubRows = _getInstance.getSubRows,
    getRowId = _getInstance.getRowId,
    stateReducer = _getInstance.stateReducer,
    useControlledState = _getInstance.useControlledState;

  // Setup user reducer ref
  var getStateReducer = useGetLatest(stateReducer);

  // Build the reducer
  var reducer = React.useCallback(function (state, action) {
    // Detect invalid actions
    if (!action.type) {
      console.info({
        action: action
      });
      throw new Error('Unknown Action 👆');
    }

    // Reduce the state from all plugin reducers
    return [].concat(_toConsumableArray(getHooks().stateReducers), _toConsumableArray(Array.isArray(getStateReducer()) ? getStateReducer() : [getStateReducer()])).reduce(function (s, handler) {
      return handler(s, action, state, getInstance()) || s;
    }, state);
  }, [getHooks, getStateReducer, getInstance]);

  // Start the reducer
  var _React$useReducer = React.useReducer(reducer, undefined, function () {
      return reducer(initialState, {
        type: actions.init
      });
    }),
    _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
    reducerState = _React$useReducer2[0],
    dispatch = _React$useReducer2[1];

  // Allow the user to control the final state with hooks
  var state = reduceHooks([].concat(_toConsumableArray(getHooks().useControlledState), [useControlledState]), reducerState, {
    instance: getInstance()
  });
  Object.assign(getInstance(), {
    state: state,
    dispatch: dispatch
  });

  // Decorate All the columns
  var columns = React.useMemo(function () {
    return linkColumnStructure(reduceHooks(getHooks().columns, userColumns, {
      instance: getInstance()
    }));
  }, [getHooks, getInstance, userColumns].concat(_toConsumableArray(reduceHooks(getHooks().columnsDeps, [], {
    instance: getInstance()
  }))));
  getInstance().columns = columns;

  // Get the flat list of all columns and allow hooks to decorate
  // those columns (and trigger this memoization via deps)
  var allColumns = React.useMemo(function () {
    return reduceHooks(getHooks().allColumns, flattenColumns(columns), {
      instance: getInstance()
    }).map(assignColumnAccessor);
  }, [columns, getHooks, getInstance].concat(_toConsumableArray(reduceHooks(getHooks().allColumnsDeps, [], {
    instance: getInstance()
  }))));
  getInstance().allColumns = allColumns;

  // Access the row model using initial columns
  var _React$useMemo = React.useMemo(function () {
      var rows = [];
      var flatRows = [];
      var rowsById = {};
      var allColumnsQueue = _toConsumableArray(allColumns);
      while (allColumnsQueue.length) {
        var column = allColumnsQueue.shift();
        accessRowsForColumn({
          data: data,
          rows: rows,
          flatRows: flatRows,
          rowsById: rowsById,
          column: column,
          getRowId: getRowId,
          getSubRows: getSubRows,
          accessValueHooks: getHooks().accessValue,
          getInstance: getInstance
        });
      }
      return [rows, flatRows, rowsById];
    }, [allColumns, data, getRowId, getSubRows, getHooks, getInstance]),
    _React$useMemo2 = _slicedToArray(_React$useMemo, 3),
    rows = _React$useMemo2[0],
    flatRows = _React$useMemo2[1],
    rowsById = _React$useMemo2[2];
  Object.assign(getInstance(), {
    rows: rows,
    initialRows: _toConsumableArray(rows),
    flatRows: flatRows,
    rowsById: rowsById
    // materializedColumns,
  });

  loopHooks(getHooks().useInstanceAfterData, getInstance());

  // Get the flat list of all columns AFTER the rows
  // have been access, and allow hooks to decorate
  // those columns (and trigger this memoization via deps)
  var visibleColumns = React.useMemo(function () {
    return reduceHooks(getHooks().visibleColumns, allColumns, {
      instance: getInstance()
    }).map(function (d) {
      return decorateColumn(d, defaultColumn);
    });
  }, [getHooks, allColumns, getInstance, defaultColumn].concat(_toConsumableArray(reduceHooks(getHooks().visibleColumnsDeps, [], {
    instance: getInstance()
  }))));

  // Combine new visible columns with all columns
  allColumns = React.useMemo(function () {
    var columns = _toConsumableArray(visibleColumns);
    allColumns.forEach(function (column) {
      if (!columns.find(function (d) {
        return d.id === column.id;
      })) {
        columns.push(column);
      }
    });
    return columns;
  }, [allColumns, visibleColumns]);
  getInstance().allColumns = allColumns;
  if (process.env.NODE_ENV !== 'production') {
    var duplicateColumns = allColumns.filter(function (column, i) {
      return allColumns.findIndex(function (d) {
        return d.id === column.id;
      }) !== i;
    });
    if (duplicateColumns.length) {
      console.info(allColumns);
      throw new Error("Duplicate columns were found with ids: \"".concat(duplicateColumns.map(function (d) {
        return d.id;
      }).join(', '), "\" in the columns array above"));
    }
  }

  // Make the headerGroups
  var headerGroups = React.useMemo(function () {
    return reduceHooks(getHooks().headerGroups, makeHeaderGroups(visibleColumns, defaultColumn), getInstance());
  }, [getHooks, visibleColumns, defaultColumn, getInstance].concat(_toConsumableArray(reduceHooks(getHooks().headerGroupsDeps, [], {
    instance: getInstance()
  }))));
  getInstance().headerGroups = headerGroups;

  // Get the first level of headers
  var headers = React.useMemo(function () {
    return headerGroups.length ? headerGroups[0].headers : [];
  }, [headerGroups]);
  getInstance().headers = headers;

  // Provide a flat header list for utilities
  getInstance().flatHeaders = headerGroups.reduce(function (all, headerGroup) {
    return [].concat(_toConsumableArray(all), _toConsumableArray(headerGroup.headers));
  }, []);
  loopHooks(getHooks().useInstanceBeforeDimensions, getInstance());

  // Filter columns down to visible ones
  var visibleColumnsDep = visibleColumns.filter(function (d) {
    return d.isVisible;
  }).map(function (d) {
    return d.id;
  }).sort().join('_');
  visibleColumns = React.useMemo(function () {
    return visibleColumns.filter(function (d) {
      return d.isVisible;
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [visibleColumns, visibleColumnsDep]);
  getInstance().visibleColumns = visibleColumns;

  // Header Visibility is needed by this point
  var _calculateHeaderWidth = calculateHeaderWidths(headers),
    _calculateHeaderWidth2 = _slicedToArray(_calculateHeaderWidth, 3),
    totalColumnsMinWidth = _calculateHeaderWidth2[0],
    totalColumnsWidth = _calculateHeaderWidth2[1],
    totalColumnsMaxWidth = _calculateHeaderWidth2[2];
  getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
  getInstance().totalColumnsWidth = totalColumnsWidth;
  getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;
  loopHooks(getHooks().useInstance, getInstance())

  // Each materialized header needs to be assigned a render function and other
  // prop getter properties here.
  ;
  [].concat(_toConsumableArray(getInstance().flatHeaders), _toConsumableArray(getInstance().allColumns)).forEach(function (column) {
    // Give columns/headers rendering power
    column.render = makeRenderer(getInstance(), column);

    // Give columns/headers a default getHeaderProps
    column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
      instance: getInstance(),
      column: column
    });

    // Give columns/headers a default getFooterProps
    column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
      instance: getInstance(),
      column: column
    });
  });
  getInstance().headerGroups = React.useMemo(function () {
    return headerGroups.filter(function (headerGroup, i) {
      // Filter out any headers and headerGroups that don't have visible columns
      headerGroup.headers = headerGroup.headers.filter(function (column) {
        var recurse = function recurse(headers) {
          return headers.filter(function (column) {
            if (column.headers) {
              return recurse(column.headers);
            }
            return column.isVisible;
          }).length;
        };
        if (column.headers) {
          return recurse(column.headers);
        }
        return column.isVisible;
      });

      // Give headerGroups getRowProps
      if (headerGroup.headers.length) {
        headerGroup.getHeaderGroupProps = makePropGetter(getHooks().getHeaderGroupProps, {
          instance: getInstance(),
          headerGroup: headerGroup,
          index: i
        });
        headerGroup.getFooterGroupProps = makePropGetter(getHooks().getFooterGroupProps, {
          instance: getInstance(),
          headerGroup: headerGroup,
          index: i
        });
        return true;
      }
      return false;
    });
  }, [headerGroups, getInstance, getHooks]);
  getInstance().footerGroups = _toConsumableArray(getInstance().headerGroups).reverse();

  // The prepareRow function is absolutely necessary and MUST be called on
  // any rows the user wishes to be displayed.

  getInstance().prepareRow = React.useCallback(function (row) {
    row.getRowProps = makePropGetter(getHooks().getRowProps, {
      instance: getInstance(),
      row: row
    });

    // Build the visible cells for each row
    row.allCells = allColumns.map(function (column) {
      var value = row.values[column.id];
      var cell = {
        column: column,
        row: row,
        value: value
      };

      // Give each cell a getCellProps base
      cell.getCellProps = makePropGetter(getHooks().getCellProps, {
        instance: getInstance(),
        cell: cell
      });

      // Give each cell a renderer function (supports multiple renderers)
      cell.render = makeRenderer(getInstance(), column, {
        row: row,
        cell: cell,
        value: value
      });
      return cell;
    });
    row.cells = visibleColumns.map(function (column) {
      return row.allCells.find(function (cell) {
        return cell.column.id === column.id;
      });
    });

    // need to apply any row specific hooks (useExpanded requires this)
    loopHooks(getHooks().prepareRow, row, {
      instance: getInstance()
    });
  }, [getHooks, getInstance, allColumns, visibleColumns]);
  getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
    instance: getInstance()
  });
  getInstance().getTableBodyProps = makePropGetter(getHooks().getTableBodyProps, {
    instance: getInstance()
  });
  loopHooks(getHooks().useFinalInstance, getInstance());
  return getInstance();
};
function calculateHeaderWidths(headers) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var sumTotalMinWidth = 0;
  var sumTotalWidth = 0;
  var sumTotalMaxWidth = 0;
  var sumTotalFlexWidth = 0;
  headers.forEach(function (header) {
    var subHeaders = header.headers;
    header.totalLeft = left;
    if (subHeaders && subHeaders.length) {
      var _calculateHeaderWidth3 = calculateHeaderWidths(subHeaders, left),
        _calculateHeaderWidth4 = _slicedToArray(_calculateHeaderWidth3, 4),
        totalMinWidth = _calculateHeaderWidth4[0],
        totalWidth = _calculateHeaderWidth4[1],
        totalMaxWidth = _calculateHeaderWidth4[2],
        totalFlexWidth = _calculateHeaderWidth4[3];
      header.totalMinWidth = totalMinWidth;
      header.totalWidth = totalWidth;
      header.totalMaxWidth = totalMaxWidth;
      header.totalFlexWidth = totalFlexWidth;
    } else {
      header.totalMinWidth = header.minWidth;
      header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
      header.totalMaxWidth = header.maxWidth;
      header.totalFlexWidth = header.canResize ? header.totalWidth : 0;
    }
    if (header.isVisible) {
      left += header.totalWidth;
      sumTotalMinWidth += header.totalMinWidth;
      sumTotalWidth += header.totalWidth;
      sumTotalMaxWidth += header.totalMaxWidth;
      sumTotalFlexWidth += header.totalFlexWidth;
    }
  });
  return [sumTotalMinWidth, sumTotalWidth, sumTotalMaxWidth, sumTotalFlexWidth];
}
function accessRowsForColumn(_ref) {
  var data = _ref.data,
    rows = _ref.rows,
    flatRows = _ref.flatRows,
    rowsById = _ref.rowsById,
    column = _ref.column,
    getRowId = _ref.getRowId,
    getSubRows = _ref.getSubRows,
    accessValueHooks = _ref.accessValueHooks,
    getInstance = _ref.getInstance;
  // Access the row's data column-by-column
  // We do it this way so we can incrementally add materialized
  // columns after the first pass and avoid excessive looping
  var accessRow = function accessRow(originalRow, rowIndex) {
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var parent = arguments.length > 3 ? arguments[3] : undefined;
    var parentRows = arguments.length > 4 ? arguments[4] : undefined;
    // Keep the original reference around
    var original = originalRow;
    var id = getRowId(originalRow, rowIndex, parent);
    var row = rowsById[id];

    // If the row hasn't been created, let's make it
    if (!row) {
      row = {
        id: id,
        original: original,
        index: rowIndex,
        depth: depth,
        cells: [{}] // This is a dummy cell
      };

      // Override common array functions (and the dummy cell's getCellProps function)
      // to show an error if it is accessed without calling prepareRow
      row.cells.map = unpreparedAccessWarning;
      row.cells.filter = unpreparedAccessWarning;
      row.cells.forEach = unpreparedAccessWarning;
      row.cells[0].getCellProps = unpreparedAccessWarning;

      // Create the cells and values
      row.values = {};

      // Push this row into the parentRows array
      parentRows.push(row);
      // Keep track of every row in a flat array
      flatRows.push(row);
      // Also keep track of every row by its ID
      rowsById[id] = row;

      // Get the original subrows
      row.originalSubRows = getSubRows(originalRow, rowIndex);

      // Then recursively access them
      if (row.originalSubRows) {
        var subRows = [];
        row.originalSubRows.forEach(function (d, i) {
          return accessRow(d, i, depth + 1, row, subRows);
        });
        // Keep the new subRows array on the row
        row.subRows = subRows;
      }
    } else if (row.subRows) {
      // If the row exists, then it's already been accessed
      // Keep recursing, but don't worry about passing the
      // accumlator array (those rows already exist)
      row.originalSubRows.forEach(function (d, i) {
        return accessRow(d, i, depth + 1, row);
      });
    }

    // If the column has an accessor, use it to get a value
    if (column.accessor) {
      row.values[column.id] = column.accessor(originalRow, rowIndex, row, parentRows, data);
    }

    // Allow plugins to manipulate the column value
    row.values[column.id] = reduceHooks(accessValueHooks, row.values[column.id], {
      row: row,
      column: column,
      instance: getInstance()
    }, true);
  };
  data.forEach(function (originalRow, rowIndex) {
    return accessRow(originalRow, rowIndex, 0, undefined, rows);
  });
}

// Actions
actions.resetExpanded = 'resetExpanded';
actions.toggleRowExpanded = 'toggleRowExpanded';
actions.toggleAllRowsExpanded = 'toggleAllRowsExpanded';

// Actions
actions.resetFilters = 'resetFilters';
actions.setFilter = 'setFilter';
actions.setAllFilters = 'setAllFilters';

// Actions
actions.resetGlobalFilter = 'resetGlobalFilter';
actions.setGlobalFilter = 'setGlobalFilter';

// Actions
actions.resetGroupBy = 'resetGroupBy';
actions.setGroupBy = 'setGroupBy';
actions.toggleGroupBy = 'toggleGroupBy';

// Actions
actions.resetSortBy = 'resetSortBy';
actions.setSortBy = 'setSortBy';
actions.toggleSortBy = 'toggleSortBy';
actions.clearSortBy = 'clearSortBy';
defaultColumn.sortType = 'alphanumeric';
defaultColumn.sortDescFirst = false;

// Actions
actions.resetPage = 'resetPage';
actions.gotoPage = 'gotoPage';
actions.setPageSize = 'setPageSize';

// Actions
actions.resetPivot = 'resetPivot';
actions.togglePivot = 'togglePivot';

// Actions
actions.resetSelectedRows = 'resetSelectedRows';
actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
actions.toggleRowSelected = 'toggleRowSelected';
actions.toggleAllPageRowsSelected = 'toggleAllPageRowsSelected';

// Actions
actions.setRowState = 'setRowState';
actions.setCellState = 'setCellState';
actions.resetRowState = 'resetRowState';

// Actions
actions.resetColumnOrder = 'resetColumnOrder';
actions.setColumnOrder = 'setColumnOrder';

// Default Column
defaultColumn.canResize = true;

// Actions
actions.columnStartResizing = 'columnStartResizing';
actions.columnResizing = 'columnResizing';
actions.columnDoneResizing = 'columnDoneResizing';
actions.resetResize = 'resetResize';

// Actions
actions.columnStartResizing = 'columnStartResizing';
actions.columnResizing = 'columnResizing';
actions.columnDoneResizing = 'columnDoneResizing';
actions.resetResize = 'resetResize';

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

exports.Table = Table;
