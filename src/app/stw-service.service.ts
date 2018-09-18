import { Injectable } from '@angular/core';
import { Perk, StatsPerk, ElementPerk } from 'src/app/models/perk';
import { Weapon} from 'src/app/models/weapon';
import { PERKS } from './Constants/PERKS';
import { Constants} from 'src/app/models/constants';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StwService {

  

  constructor() { }

  // Returns a list of weapons the user owns.
  getWeapons() : Observable<Weapon[]>{

    return of(null);
  }

  // TODO: Returns a selected weapon, we try a Siegebreaker for now.
  getSelectedWeapon() : Weapon{
    var weapon = new Weapon("Siegebreaker", "A balanced assault rifle used by all the meta bois out there. It is also a popular item used in trading.", 5, 1000, 50, 20, 50);
    weapon.addPerk(new StatsPerk("Damage up", "Increase damage by {value}%", 3, 5, Constants.STATS_DAMAGE, 10), 0);
    weapon.addPerk(new StatsPerk("Reload up", "Increase reload speed by {value}%", 1, 5, Constants.STATS_DAMAGE,10), 1);
    weapon.addPerk(new ElementPerk("Element up", "{element} element, Increase damage by {value}%", 1, 5, Constants.ELEMENT_ENERGY, 5), 2);
    weapon.addPerk(new StatsPerk("Headshot Damage up", "Increase headshot damage by {value}%", 1, 5, Constants.STATS_DAMAGE,10), 3);
    weapon.addPerk(new StatsPerk("Mist up", "Deal {value}% more damage to mist monsters and bosses", 1, 5, Constants.STATS_DAMAGE,10), 4);
    weapon.addPerk(new StatsPerk("Bonus up", "Damage dealt causes aflliction for {value} seconds", 1, 5, Constants.STATS_DAMAGE,10), 5);
    
    return weapon;
  }

  getTierPerks(tier: number, weaponType: string) : Perk[] {

    var perks : Perk[] = [];

    switch(tier){
      case 1:
      perks.push(new StatsPerk("Damage up", "Increase damage by {value}%", 3, 5, Constants.STATS_DAMAGE, 10));
      perks.push(new StatsPerk("Crit up", "Increase critical rating by {value}", 1, 5, Constants.STATS_DAMAGE, 15));
      break;

      case 2:
      perks.push(new StatsPerk("Damage up", "Increase reload Speed by {value}%", 3, 5, Constants.STATS_DAMAGE, 20));
      perks.push(new StatsPerk("Crit up", "Increase your mom by {value}", 1, 5, Constants.STATS_DAMAGE, 25));
      break;

    }

    return perks;
  }
}
