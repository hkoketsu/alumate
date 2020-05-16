import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleResultSectionComponent } from './people-result-section.component';

describe('PeopleResultSectionComponent', () => {
  let component: PeopleResultSectionComponent;
  let fixture: ComponentFixture<PeopleResultSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleResultSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleResultSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
