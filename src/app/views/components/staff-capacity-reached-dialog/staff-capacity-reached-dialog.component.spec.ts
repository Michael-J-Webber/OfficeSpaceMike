import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCapacityReachedDialogComponent } from './staff-capacity-reached-dialog.component';

describe('StaffCapacityReachedDialogComponent', () => {
  let component: StaffCapacityReachedDialogComponent;
  let fixture: ComponentFixture<StaffCapacityReachedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffCapacityReachedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCapacityReachedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
