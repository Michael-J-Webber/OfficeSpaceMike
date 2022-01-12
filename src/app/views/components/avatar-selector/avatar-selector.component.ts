import { Component, OnInit, Input } from '@angular/core';
import { Avatar, geAvatarUrls } from 'src/app/enums/avatar';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss']
})
export class AvatarSelectorComponent implements OnInit {
  avatars = Avatar;
  @Input() selected : string | undefined;
  @Input() error : boolean | undefined;
  @Output() newAvatarSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  getUrl(name: string) {
    return geAvatarUrls(name);
  }

  select(name:string) {
    this.selected = name;
    this.error = false;
    this.newAvatarSelected.emit(this.selected);
  }
}
