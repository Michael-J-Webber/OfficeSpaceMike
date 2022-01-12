import { Component, Inject, OnInit} from '@angular/core';
import { Icon } from 'src/app/enums/icons';
import { OfficeService } from 'src/app/providers/office.service';
import { FormControl } from '@angular/forms';
import { StaffMember } from 'src/app/models/staff_model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Avatar } from 'src/app/enums/avatar';
import { DialogData } from 'src/app/enums/dialog_data';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-new-staff-member-dialog',
  templateUrl: './new-staff-member-dialog.component.html',
  styleUrls: ['./new-staff-member-dialog.component.scss']
})

export class NewStaffMemberDialogComponent implements OnInit {
  icons = Icon;
  avatars = Avatar;
  stepIndex: number = 1;
  avatar =  '';
  isExistingMember = false;
  showAvatarError = false;

  myForm = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl()
  });

  constructor(
    public dialogRef: MatDialogRef<NewStaffMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private officeService :OfficeService,
  ) {}

  ngOnInit(): void {
    if (this.data.memberId) {
      //if data is passed through dialog data, implies the staff member exists
      let tempMember = this.officeService.getMemberById(this.data.officeId, this.data.memberId); //get member info from service
      if (tempMember) {
        //set input values
        this.myForm.get('firstName')!.setValue(tempMember.firstName);
        this.myForm.get('lastName')!.setValue(tempMember.lastName);
        this.avatar = tempMember.avatar;
      }
      this.isExistingMember = true;
    }
  }
  
  public selectAvatar(newAvatar: string) {
    this.avatar = newAvatar;
    this.showAvatarError = false;
  }

  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  public moveNext() {
    //navigate to second step if no errors
    if(!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.stepIndex = 2;
  }

  public moveBack() {
    // navigate to previous step
    this.stepIndex = 1;
  }

  public createMember() {
    

    if (this.avatar == '') {
      //validate that avatar selected
      this.showAvatarError = true;
      return;
    }

    var tempMember = new StaffMember({
      id: this.data.memberId.toString(),
      firstName: this.myForm.get('firstName')!.value,
      lastName: this.myForm.get('lastName')!.value,
      avatar: this.avatar
    });
    
    if (this.data.officeId) {
      this.officeService.updateMember(this.data.officeId, tempMember);
    }

  }
}
