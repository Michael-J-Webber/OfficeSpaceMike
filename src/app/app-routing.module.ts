import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeCreateEditComponent } from './views/pages/office-create-edit/office-create-edit.component';
import { OfficeDetailComponent } from './views/pages/office-detail/office-detail.component';
import { OfficeListPageComponent } from './views/pages/office-list-page/office-list-page.component';
const routes: Routes = [
  {path: '', component: OfficeListPageComponent},
  {path: 'add-office', component: OfficeCreateEditComponent},
  {path: 'edit-office/:id', component: OfficeCreateEditComponent},
  {path: 'view-office/:id', component: OfficeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
