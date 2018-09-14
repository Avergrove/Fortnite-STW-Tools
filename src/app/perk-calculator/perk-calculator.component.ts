import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perk-calculator',
  templateUrl: './perk-calculator.component.html',
  styleUrls: ['./perk-calculator.component.css']
})
export class PerkCalculatorComponent implements OnInit {

  @Input() baseDamageBonus: number;
  @Input() baseHeadshotBonus: number;
  @Input() baseCritChance: number;
  @Input() baseCritBonus: number;

  @Input() perkDamageBonus: number;
  @Input() perkHeadshotBonus: number;
  @Input() perkCritRating: number;
  @Input() perkCritBonus: number;

  finalDamageBonus: number;
  finalHeadshotBonus: number;
  finalCritChance: number;
  finalCritBonus: number;

  baseTotalBonus: number;
  finalTotalBonus: number;
  finalPerkBonus: number;

  constructor() { 
    this.baseDamageBonus = 0;
  }

  ngOnInit() {
  }

  // Critical Chance = 75 * Critical Rating / (50 + Critical Rating)
  // Crit Rating = (50 * CritChance) / (75 - CritChance);

  recalculate($event){

    // Base Total Damage Bonus
    this.baseTotalBonus = (1 + this.baseDamageBonus/100) * (this.baseHeadshotBonus/100) * (this.baseCritChance / 100) * (this.baseCritBonus / 100) * 100;

    // Damage Bonus
    this.finalDamageBonus = this.baseDamageBonus + this.perkDamageBonus;

    // Headshot Damage Bonus
    this.finalHeadshotBonus = this.baseHeadshotBonus + this.perkHeadshotBonus;

    // Crit Rating
    var baseCritRating = (50 * this.baseCritChance) / (75 - this.baseCritChance);
    var finalCritRating = baseCritRating + this.perkCritRating;
    this.finalCritChance = (75 * finalCritRating) / (50 + finalCritRating);

    // Crit Bonus
    this.finalCritBonus = this.baseCritBonus + this.perkCritBonus;

    // Final Damage Bonus
    this.finalTotalBonus = (1 + this.finalDamageBonus / 100) * (this.finalHeadshotBonus/100) * (this.finalCritChance / 100) * (this.finalCritBonus / 100) * 100;

    // Perk Damage Bonus
    this.finalPerkBonus = this.finalTotalBonus - this.baseTotalBonus;

  }
}