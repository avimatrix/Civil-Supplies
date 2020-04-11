import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseDemandComponent } from './district-wise-demand.component';

describe('DistrictWiseDemandComponent', () => {
  let component: DistrictWiseDemandComponent;
  let fixture: ComponentFixture<DistrictWiseDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
