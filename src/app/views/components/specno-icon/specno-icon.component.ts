import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/enums/icons';

@Component({
  selector: 'app-specno-icon',
  templateUrl: './specno-icon.component.html',
  styleUrls: ['./specno-icon.component.scss']
})
export class SpecnoIconComponent {
  
  @Input() icon: Icon | undefined;
  constructor() {}

}
