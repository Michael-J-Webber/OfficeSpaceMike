import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { OfficeCardComponent } from './office-card/office-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { StaffMemberListComponent } from './staff-member-list/staff-member-list.component';
import { StaffMemberListEntryComponent } from './staff-member-list-entry/staff-member-list-entry.component';
import { SpecnoIconComponent } from './specno-icon/specno-icon.component';
import { SideColorBarComponent } from './side-color-bar/side-color-bar.component';
import { NewStaffMemberDialogComponent } from './new-staff-member-dialog/new-staff-member-dialog.component';
import { StaffOptionDialogComponent } from './staff-option-dialog/staff-option-dialog.component';
import { StaffCapacityReachedDialogComponent } from './staff-capacity-reached-dialog/staff-capacity-reached-dialog.component';
import { OfficeDeleteDialogComponent } from './office-delete-dialog/office-delete-dialog.component';
import { UtilsModule, } from 'src/app/utils/utils.module';
import { OfficeSnackBarComponent } from './office-snack-bar/office-snack-bar.component'

@NgModule({
  declarations: [
    OfficeCardComponent,
    SearchBarComponent,
    ColorSelectorComponent,
    AvatarSelectorComponent,
    StaffMemberListComponent,
    StaffMemberListEntryComponent,
    SpecnoIconComponent,
    SideColorBarComponent,
    NewStaffMemberDialogComponent,
    StaffOptionDialogComponent,
    StaffCapacityReachedDialogComponent,
    OfficeDeleteDialogComponent,
    OfficeSnackBarComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    UtilsModule
  ],
  exports: [
    OfficeCardComponent,
    SearchBarComponent,
    ColorSelectorComponent,
    StaffMemberListComponent,
    StaffMemberListEntryComponent,
    SpecnoIconComponent,
    OfficeSnackBarComponent
  ]
})
export class ComponentsModule { }
