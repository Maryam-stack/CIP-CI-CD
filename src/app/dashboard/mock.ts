
import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'mock',
  template: `<h1 mat-dialog-title>Delete file</h1>
  <div mat-dialog-content>
    Would you like to delete item?
  </div>
  <div mat-dialog-actions>
    <button mat-button mat-dialog-close>No</button>
    <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
  </div>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class Mock {}
