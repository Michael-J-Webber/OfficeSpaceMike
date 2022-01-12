import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecnoIconComponent } from './specno-icon.component';

describe('SpecnoIconComponent', () => {
  let component: SpecnoIconComponent;
  let fixture: ComponentFixture<SpecnoIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecnoIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecnoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
