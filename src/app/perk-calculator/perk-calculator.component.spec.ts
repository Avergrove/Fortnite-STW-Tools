import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerkCalculatorComponent } from './perk-calculator.component';

describe('PerkCalculatorComponent', () => {
  let component: PerkCalculatorComponent;
  let fixture: ComponentFixture<PerkCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerkCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerkCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
