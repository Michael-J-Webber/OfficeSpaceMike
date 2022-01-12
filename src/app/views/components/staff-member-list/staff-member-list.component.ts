import { Component, Input } from '@angular/core';
import { StaffMember } from 'src/app/models/staff_model';
import { OfficeService } from 'src/app/providers/office.service';
@Component({
  selector: 'app-staff-member-list',
  templateUrl: './staff-member-list.component.html',
  styleUrls: ['./staff-member-list.component.scss']
})
export class StaffMemberListComponent {

  @Input() officeMembers: StaffMember[] | undefined;
  @Input() officeId: string | undefined;
  query : string | number = '';

  constructor(private officeService: OfficeService) {
    this.officeService.offices.subscribe(value=>{ // subscribe to office service and update on changes
      if(this.officeId) {
        this.officeMembers = value.find((_office)=>{return _office.id == this.officeId})?.members;
      }
    });
   }
}
