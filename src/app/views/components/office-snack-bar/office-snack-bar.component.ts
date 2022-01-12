import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
  selector: 'app-office-snack-bar',
  templateUrl: './office-snack-bar.component.html',
  styleUrls: ['./office-snack-bar.component.scss']
})
export class OfficeSnackBarComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: {message: string}
  ) { }

}
