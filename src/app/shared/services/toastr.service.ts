import { Injectable } from '@angular/core';

declare let toastr;

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor() {}

  success(msg) {
    toastr.success(msg);
  }
}
