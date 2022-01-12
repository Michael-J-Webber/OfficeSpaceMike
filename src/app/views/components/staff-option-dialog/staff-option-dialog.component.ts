import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Icon } from 'src/app/enums/icons';

@Component({
  selector: 'app-staff-option-dialog',
  templateUrl: './staff-option-dialog.component.html',
  styleUrls: ['./staff-option-dialog.component.scss']
})

export class StaffOptionDialogComponent {

  shouldDelete : boolean = false;
  icons = Icon;

  constructor(
    public dialogRef: MatDialogRef<StaffOptionDialogComponent>,
  ) {}

}
