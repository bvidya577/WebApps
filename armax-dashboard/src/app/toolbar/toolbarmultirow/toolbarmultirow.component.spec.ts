import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarmultirowComponent } from './toolbarmultirow.component';

describe('ToolbarmultirowComponent', () => {
  let component: ToolbarmultirowComponent;
  let fixture: ComponentFixture<ToolbarmultirowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarmultirowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarmultirowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
