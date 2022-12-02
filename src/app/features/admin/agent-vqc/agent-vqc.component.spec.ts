import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentVqcComponent } from './agent-vqc.component';

describe('AgentVqcComponent', () => {
  let component: AgentVqcComponent;
  let fixture: ComponentFixture<AgentVqcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentVqcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentVqcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
