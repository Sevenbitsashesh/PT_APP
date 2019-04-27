import { MatPaginatorIntl } from '@angular/material';

export class CustomMatPaginatorIntl extends MatPaginatorIntl {

  getRangeLabel = function (page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return '0/' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return endIndex + ' / ' + length;
  };
}