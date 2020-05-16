import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDetailFormComponent } from './message-detail-form.component';

describe('MessageDetailFormComponent', () => {
  let component: MessageDetailFormComponent;
  let fixture: ComponentFixture<MessageDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
