import { saveAs } from 'file-saver';

export function camelCase(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLocaleUpperCase() : word.toLocaleLowerCase();
    })
    .replace(/\s+/g, '');
}

export const flattenObject = (obj: Object, parentKey?: string) => {
  let result: any = {};

  Object.entries(obj).forEach(([key, value]) => {
    const _key = parentKey ? parentKey + '.' + key : key;
    if (value != null) {
      if (typeof value === 'object') {
        result = { ...result, ...flattenObject(value, _key) };
      } else {
        result[_key] = value;
      }
    }
    else{
        result[_key] = null
    }
  });

  return result;
};


export const exportToCSV = (dataTable: any[], fileName: string)=>{
  const csvData = convertToCSV(dataTable);
  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });

  saveAs(blob, fileName + '.csv');
}

function convertToCSV(dataTable: any[]): string {
  const separator = ';';
  const keys = Object.keys(dataTable[0]);
  const csvHeader = keys.join(separator);

  const csvRows = dataTable.map(item => {
    const values = keys.map(key => item[key]);
    return values.join(separator);
  });

  return csvHeader + '\n' + csvRows.join('\n');
}