import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveIndentComponent } from './approve-indent.component';

describe('ApproveIndentComponent', () => {
  let component: ApproveIndentComponent;
  let fixture: ComponentFixture<ApproveIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
