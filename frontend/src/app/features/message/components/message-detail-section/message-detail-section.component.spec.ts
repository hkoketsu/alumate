import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDetailSectionComponent } from './message-detail-section.component';

describe('MessageDetailSectionComponent', () => {
  let component: MessageDetailSectionComponent;
  let fixture: ComponentFixture<MessageDetailSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDetailSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDetailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
