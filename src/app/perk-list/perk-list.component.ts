import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Perk, StatsPerk, ElementPerk } from 'src/app/models/perk';
import { Constants } from 'src/app/models/constants';

@Component({
  selector: 'app-perk-list',
  templateUrl: './perk-list.component.html',
  styleUrls: ['./perk-list.component.css']
})
export class PerkListComponent implements OnInit {

  perks : Perk[];

  @Output() 
  onPerkSlotSelectEvent = new EventEmitter<number>();


  constructor() {
    this.perks = []; 
    this.perks.push(new StatsPerk("Damage", Constants.TEXT_PERK_DAMAGE_BONUS, 5, 5, Constants.STATS_CRIT_CHANCE, 10));
    this.perks.push(new StatsPerk("Crit Rating", Constants.TEXT_PERK_CRIT_RATING, 1, 5, Constants.STATS_CRIT_CHANCE, 10));
    this.perks.push(new StatsPerk("Reload Speed", Constants.TEXT_PERK_RELOAD_SPEED, 1, 5, Constants.STATS_CRIT_CHANCE, 10));
    this.perks.push(new ElementPerk("Element", Constants.TEXT_PERK_ELEMENT, 1, 5, Constants.ELEMENT_ENERGY, 10));
    this.perks.push(new StatsPerk("Crit Damage Bonus", Constants.TEXT_PERK_CRIT_DAMAGE, 1, 5, Constants.STATS_CRIT_BONUS, 10));
    this.perks.push(new StatsPerk("Condition Bonus", Constants.TEXT_PERK_MIST_BOSS_BONUS, 1, 5, Constants.STATS_CRIT_CHANCE, 10));
  }

  onPerkSlotSelect(tier: number){
    this.onPerkSlotSelectEvent.emit(tier);
  }


  ngOnInit() {
  }

}
