import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageBar } from './send-message-bar';

describe('SendMessageBar', () => {
  let component: SendMessageBar;
  let fixture: ComponentFixture<SendMessageBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendMessageBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMessageBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
