import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 

import { OfficeDetailComponent } from './office-detail/office-detail.component';
import { OfficeCreateEditComponent } from './office-create-edit/office-create-edit.component';
import { OfficeListPageComponent } from './office-list-page/office-list-page.component';

@NgModule({
  declarations: [
    OfficeListPageComponent,
    OfficeDetailComponent,
    OfficeCreateEditComponent,
    OfficeListPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    OfficeListPageComponent,
    OfficeDetailComponent,
    OfficeCreateEditComponent
  ]
})
export class PagesModule { }
