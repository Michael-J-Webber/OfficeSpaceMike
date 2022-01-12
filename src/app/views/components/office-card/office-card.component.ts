import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Icon } from 'src/app/enums/icons';
import { Colors } from 'src/app/enums/colors';
import { Office } from 'src/app/models/office_model';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.scss']
})
export class OfficeCardComponent {

  @Input() thisOffice: Office| undefined;

  panelOpenState = false;
  icons = Icon;
  colors = Colors;
  opened = false;
  titleHovering = false;
  descriptionHovering = false;

  constructor(public router: Router) { }

  public editOffice() {
    this.router.navigateByUrl('/edit-office/'+(this.thisOffice?.id ?? 1));
  }

  public toggelTitleHovering() {
    this.titleHovering = !this.titleHovering;
  }

  public getMySidebar(color: string): string {
    let keyTyped = color as keyof typeof Colors;
    return Colors[keyTyped].hex;
  }

  public navigate() {
    this.router.navigateByUrl('/view-office/'+(this.thisOffice?.id ?? 1));
  }

}  




