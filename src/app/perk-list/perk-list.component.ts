import { Component, OnInit } from '@angular/core';
import { Perk, StatsPerk } from 'src/app/models/perk';
import { Constants } from 'src/app/models/constants';

@Component({
  selector: 'app-perk-list',
  templateUrl: './perk-list.component.html',
  styleUrls: ['./perk-list.component.css']
})
export class PerkListComponent implements OnInit {

  perks : Perk[];

  constructor() {
    this.perks = []; 
    this.perks.push(new StatsPerk("Crit Rating", "Crit Rating +", 1, 5, Constants.STATS_CRIT_CHANCE, 10));
    this.perks.push(new StatsPerk("Crit Rating", "Crit Rating +", 1, 5, Constants.STATS_CRIT_CHANCE, 10));
    this.perks.push(new StatsPerk("Crit Rating", "Crit Rating +", 1, 5, Constants.STATS_CRIT_CHANCE, 10));
    this.perks.push(new StatsPerk("Crit Rating", "Crit Rating +", 1, 5, Constants.STATS_CRIT_CHANCE, 10));
    this.perks.push(new StatsPerk("Crit Rating", "Crit Rating +", 1, 5, Constants.STATS_CRIT_CHANCE, 10));
    this.perks.push(new StatsPerk("Crit Rating", "Crit Rating +", 1, 5, Constants.STATS_CRIT_CHANCE, 10));
  }

  ngOnInit() {
  }

}
