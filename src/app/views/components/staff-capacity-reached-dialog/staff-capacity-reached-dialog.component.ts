import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Icon } from 'src/app/enums/icons';

@Component({
  selector: 'app-staff-capacity-reached-dialog',
  templateUrl: './staff-capacity-reached-dialog.component.html',
  styleUrls: ['./staff-capacity-reached-dialog.component.scss']
})

export class StaffCapacityReachedDialogComponent {

  close: Boolean = false;
  icons = Icon;

  constructor(
    public dialogRef: MatDialogRef<StaffCapacityReachedDialogComponent>,
  ) {}

}
