import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/enums/icons';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  
  @Input()  searchText!: number | string;
  @Output() textChange = new EventEmitter<number | string>();
  icons = Icon;

  constructor() { }

  public emitUpdate() {
    this.textChange.emit(this.searchText);
  }

}
