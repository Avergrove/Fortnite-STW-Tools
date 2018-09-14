export interface ElementPerk extends Perk{
    element: string;
    amount: number;
}

export interface ConditionPerk extends Perk{
    condition: string;
    result: string;
    amount: number;
}

export class Perk{
    name: string;           // The name of the perk
    description: string;    // The written description of the perk
    tier: number;           // The current tier of the perk.
    increment: number;      // The increase in number for each tier of the perk.

    constructor(name: string, description: string, tier: number, increment: number){
        this.name = name;
        this.description = description;
        this.tier = tier;
        this.increment = increment;
    };
}

export class StatsPerk extends Perk{
    stats: string;
    baseAmount: number;

    constructor(name: string, description: string, tier: number, increment: number, stats: string, baseAmount: number){
        super(name, description, tier, increment);
        this.stats = stats;
        this.baseAmount = baseAmount;
    };

    clone(){
        var newPerk: StatsPerk;
        newPerk = this.constructor(this.name, this.description, this.tier, this.increment, this.stats, this.baseAmount);
        return newPerk;
    }
}
