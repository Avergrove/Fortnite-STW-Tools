import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perk-calculator',
  templateUrl: './perk-calculator.component.html',
  styleUrls: ['./perk-calculator.component.css']
})
export class PerkCalculatorComponent implements OnInit {

  @Input() baseCritChance: number;
  @Input() baseCritDamage: number;

  @Input() perkCritRating: number;
  @Input() perkCritDamage: number;

  totalCritRating: number;
  totalCritChance: number;
  totalCritDamage: number;

  critChanceIncrease: number;
  critDamageIncrease: number;

  finalDamage: number;

  avgDamageIncrease:number; 

  // Debug
  baseCritRating: number;


  constructor() { }

  ngOnInit() {
  }

  // Critical Chance = 75 * Critical Rating / (50 + Critical Rating)
  // Crit Rating = (50 * CritChance) / (75 - CritChance);

  recalculate($event){
    this.baseCritRating = (50 * this.baseCritChance) / (75 - this.baseCritChance);
    this.totalCritRating = this.baseCritRating + this.perkCritRating;

    
    this.totalCritChance = (75 * this.totalCritRating) / (50 + this.totalCritRating);
    this.critChanceIncrease = this.totalCritChance - this.baseCritChance;
    
    this.totalCritDamage = this.baseCritDamage + this.perkCritDamage;

    this.avgDamageIncrease = this.critChanceIncrease * (this.totalCritDamage/100);

  }
}