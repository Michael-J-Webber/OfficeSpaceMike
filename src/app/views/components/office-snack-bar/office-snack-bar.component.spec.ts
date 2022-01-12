import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSnackBarComponent } from './office-snack-bar.component';

describe('OfficeSnackBarComponent', () => {
  let component: OfficeSnackBarComponent;
  let fixture: ComponentFixture<OfficeSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeSnackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
