import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeDeleteDialogComponent } from './office-delete-dialog.component';

describe('OfficeDeleteDialogComponent', () => {
  let component: OfficeDeleteDialogComponent;
  let fixture: ComponentFixture<OfficeDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
