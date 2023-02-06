'use strict';

var XLSX = require('xlsx');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var XLSX__namespace = /*#__PURE__*/_interopNamespaceDefault(XLSX);

// headerRow < 0 means no header
function excelToJson(file, _ref) {
  var headerRow = _ref.headerRow;
  // console.log(`excelToJson: ${file}`);

  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();
    fileReader.onload = function (e) {
      var bStr = e.target.result;
      var sheetJsons = [];
      var readOptions = {
        type: 'binary',
        raw: true // every cell is read in store value
      };

      var wb = XLSX__namespace.read(bStr, readOptions);
      wb.SheetNames.forEach(function (sheetName) {
        var ws = wb.Sheets[sheetName];

        // We will get dates as string as what is visible
        // {range:n} uses n+1 the as header
        // {header:1} for using first row as data
        var sheetOptions = {
          header: headerRow < 0 ? 1 : 0
        };
        var data = XLSX__namespace.utils.sheet_to_json(ws, sheetOptions);

        // const dataAdjustedDates = data.map(item => fixDatesInObject(item));
        // console.log(JSON.stringify(dataAdjustedDates, null, 2));

        var sheetObj = {
          sheetName: sheetName,
          data: data
        };
        sheetJsons.push(sheetObj);
      });
      resolve(sheetJsons);
    };
    fileReader.onerror = function (e) {
      console.log('Error reading excel file');
    };

    // We are reading an uploaded file
    fileReader.readAsBinaryString(file);
  });
}
function exportJsonToExcel(json) {
  var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var header = arguments.length > 2 ? arguments[2] : undefined;
  var ws = XLSX__namespace.utils.json_to_sheet(json, {
    header: header
  });
  var wb = XLSX__namespace.utils.book_new();
  XLSX__namespace.utils.book_append_sheet(wb, ws, 'test');
  XLSX__namespace.writeFile(wb, fileName);
}

exports.excelToJson = excelToJson;
exports.exportJsonToExcel = exportJsonToExcel;
