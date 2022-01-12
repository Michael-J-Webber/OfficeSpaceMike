import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideColorBarComponent } from './side-color-bar.component';

describe('SideColorBarComponent', () => {
  let component: SideColorBarComponent;
  let fixture: ComponentFixture<SideColorBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideColorBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideColorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
