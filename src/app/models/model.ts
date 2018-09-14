export interface Perk{
    name: string;
    effect: string;
}

export interface NumberPerk extends Perk{
    stats: string;
    amount: number;
}

export interface ElementPerk extends Perk{
    element: string;
    amount: number;
}

export interface ConditionPerk extends Perk{
    condition: string;
    result: string;
    amount: number;
}