import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as modeActions from 'src/app/store/mode/mode.actions';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  adminMode = true;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.subscribe((store) => {
      this.adminMode = store['modeReducer'].isAdminMode;
    });
  }
  activateAdminMode() {
    this.store.dispatch(modeActions.ADMIN_MODE());
  }
  deactivateAdminMode() {
    this.store.dispatch(modeActions.READER_MODE());
  }
}
