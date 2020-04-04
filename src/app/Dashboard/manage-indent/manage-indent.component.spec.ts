import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIndentComponent } from './manage-indent.component';

describe('ManageIndentComponent', () => {
  let component: ManageIndentComponent;
  let fixture: ComponentFixture<ManageIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
