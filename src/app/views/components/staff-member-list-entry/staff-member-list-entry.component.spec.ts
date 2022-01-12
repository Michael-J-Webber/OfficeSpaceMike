import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMemberListEntryComponent } from './staff-member-list-entry.component';

describe('StaffMemberListEntryComponent', () => {
  let component: StaffMemberListEntryComponent;
  let fixture: ComponentFixture<StaffMemberListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffMemberListEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMemberListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
