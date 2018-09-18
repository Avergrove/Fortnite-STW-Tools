import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StwPerkRecombobulatorComponent } from './stw-perk-recombobulator.component';

describe('StwPerkRecombobulatorComponent', () => {
  let component: StwPerkRecombobulatorComponent;
  let fixture: ComponentFixture<StwPerkRecombobulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StwPerkRecombobulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StwPerkRecombobulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
