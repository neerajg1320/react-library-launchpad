import * as XLSX from 'xlsx';

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

      var wb = XLSX.read(bStr, readOptions);
      wb.SheetNames.forEach(function (sheetName) {
        var ws = wb.Sheets[sheetName];

        // We will get dates as string as what is visible
        // {range:n} uses n+1 the as header
        // {header:1} for using first row as data
        var sheetOptions = {
          header: headerRow < 0 ? 1 : 0
        };
        var data = XLSX.utils.sheet_to_json(ws, sheetOptions);

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
  var ws = XLSX.utils.json_to_sheet(json, {
    header: header
  });
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'test');
  XLSX.writeFile(wb, fileName);
}

export { excelToJson, exportJsonToExcel };
