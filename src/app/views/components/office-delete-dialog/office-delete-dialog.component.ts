import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Icon } from 'src/app/enums/icons';
interface DialogData { // own dialogInterface as it doesn't comform to other two dialogs
  name: string
}

@Component({
  selector: 'app-office-delete-dialog',
  templateUrl: './office-delete-dialog.component.html',
  styleUrls: ['./office-delete-dialog.component.scss']
})
export class OfficeDeleteDialogComponent {
  
  icons = Icon;

  constructor(
    public dialogRef: MatDialogRef<OfficeDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

}
