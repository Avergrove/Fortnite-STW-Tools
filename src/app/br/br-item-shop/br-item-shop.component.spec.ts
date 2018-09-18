import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrItemShopComponent } from './br-item-shop.component';

describe('BrItemShopComponent', () => {
  let component: BrItemShopComponent;
  let fixture: ComponentFixture<BrItemShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrItemShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrItemShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
