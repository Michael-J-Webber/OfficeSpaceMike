import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffOptionDialogComponent } from './staff-option-dialog.component';

describe('StaffOptionDialogComponent', () => {
  let component: StaffOptionDialogComponent;
  let fixture: ComponentFixture<StaffOptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffOptionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffOptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
