import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStaffMemberDialogComponent } from './new-staff-member-dialog.component';

describe('NewStaffMemberDialogComponent', () => {
  let component: NewStaffMemberDialogComponent;
  let fixture: ComponentFixture<NewStaffMemberDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStaffMemberDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStaffMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
