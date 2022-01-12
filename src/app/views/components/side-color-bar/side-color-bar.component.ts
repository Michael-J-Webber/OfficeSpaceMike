import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-color-bar',
  templateUrl: './side-color-bar.component.html',
  styleUrls: ['./side-color-bar.component.scss']
})

export class SideColorBarComponent {

  @Input() baseColor: string | undefined;
  constructor() {}

}
