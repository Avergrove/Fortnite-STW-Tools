import { Perk } from 'src/app/models/perk';

export class Weapon {
  name: string; // The name of the weapon
  description: string; // The written description of the weapon
  rarity: number; // The rarity of the weapon
  perks: Perk[];
  damage: number;
  headshotDamage: number;
  critChance: number;
  critDamage: number;

  constructor(name: string, description: string, rarity:number,  damage: number, headshotDamage: number, critChance: number, critDamage: number) {
    this.name = name;
    this.description = description;
    this.rarity = rarity;
    this.perks = [];
    this.damage = damage;
    this.headshotDamage = headshotDamage;
    this.critChance = critChance;
    this.critDamage = critDamage;
  }

  addPerk(perk : Perk, index: number){
    this.perks[index] = perk;
  }

}