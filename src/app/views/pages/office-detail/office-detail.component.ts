import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Icon } from 'src/app/enums/icons';
import { Office } from 'src/app/models/office_model';
import { OfficeService } from 'src/app/providers/office.service';
import { NewStaffMemberDialogComponent } from '../../components/new-staff-member-dialog/new-staff-member-dialog.component';
import { OfficeSnackBarComponent } from '../../components/office-snack-bar/office-snack-bar.component'; 
import { StaffCapacityReachedDialogComponent } from '../../components/staff-capacity-reached-dialog/staff-capacity-reached-dialog.component';


@Component({
  selector: 'app-office-detail',
  templateUrl: './office-detail.component.html',
  styleUrls: ['./office-detail.component.scss']
})
export class OfficeDetailComponent implements OnInit {

  officeId: string | undefined;
  icons = Icon;
  thisOffice: Office | undefined;
  isLoading = false;

  constructor(
    public dialog: MatDialog, 
    private snackBar: MatSnackBar,
    private officeService: OfficeService,
    public route: ActivatedRoute,
    public router: Router, 
  ) {
    this.officeId = this.route.snapshot.paramMap.get('id') ?? undefined; //get office from router
    this.officeService.offices.subscribe(value=>{ //subscriber to office service and update page onchange
      if(this.officeId) {
        this.thisOffice = value.find((_office)=>{return _office.id == this.officeId});
      }
    });
   }

  async ngOnInit(): Promise<void> {

    if(this.officeId && !this.thisOffice) {
      this.isLoading = true;
      this.thisOffice = await this.officeService.getOfficeById(this.officeId); //initial fetch of office details
      this.isLoading = false;
    }
  }

  public goBack() {
    this.router.navigateByUrl('/');
  }

  public async openDialog() {
    if (this.officeId) {
      let tempOffice = await this.officeService.getOfficeById(this.officeId);
      if (tempOffice) {
        let tempCapacity = tempOffice?.capacity;
        let totalOfficeMembers = tempOffice?.members?.length;
        let maxVolumeReached = ((typeof (totalOfficeMembers) != "undefined" && typeof (tempCapacity) != "undefined")) ? (totalOfficeMembers >= tempCapacity ? true : false) : false;
        if (maxVolumeReached) {

          const dialogRef = this.dialog.open(StaffCapacityReachedDialogComponent, {
            width: 'calc(100% - 2rem)',
            maxWidth: '345px',
            data: {
              name: this.thisOffice?.name
            }
          });

          dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
              this.snackBar.openFromComponent(OfficeSnackBarComponent, {
                data: {
                  message: "Office Capacity Reached"
                },
                duration: 2000,
              });
            }
          });


        }
        else {
          const dialogRef = this.dialog.open(NewStaffMemberDialogComponent, {
            width: 'calc(100% - 2rem)',
            maxWidth: '350px',
            data: { officeId: this.officeId, memberId: '' }
          });

          dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
              this.snackBar.openFromComponent(OfficeSnackBarComponent, {
                data: {
                  message: "User added"
                },
                duration: 2000,
              });
            }
          });
        }
      }


    }
  }

}
