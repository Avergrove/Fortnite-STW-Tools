
export interface IConstants{
    STATS_DAMAGE: string;
    STATS_CRIT_RATING: string;
    STATS_CRIT_CHANCE: string;
    STATS_CRIT_BONUS: string;

    STATS_RELOAD_SPEED: string;
    STATS_MAGAZINE_SIZE: string;

    ELEMENT_ENERGY: string;
    ELEMENT_FIRE: string;
    ELEMENT_WATER: string;
    ELEMENT_NATURE: string;
    ELEMENT_PHYSICAL: string;
    ELEMENT_EDGE: string;

    TEXT_PERK_DAMAGE_BONUS: string;
    TEXT_PERK_HEADSHOT_BONUS: string;
    TEXT_PERK_CRIT_RATING: string;
    TEXT_PERK_CRIT_DAMAGE: string;
    TEXT_PERK_ELEMENT: string;
    TEXT_PERK_RELOAD_SPEED: string;
    TEXT_PERK_MIST_BOSS_BONUS: string;

    WEAPON_SHOTGUN: string,
    WEAPON_ASSAULT: string,
    WEAPON_SNIPER: string,
    WEAPON_PISTOL: string,
    WEAPON_EXPLOSIVE: string,

    WEAPON_CLUB: string,
    WEAPON_HARDWARE: string,
    WEAPON_SWORD: string,
    WEAPON_SCYTHE: string,
}

export const Constants: IConstants = {
    STATS_DAMAGE: "damage",
    STATS_CRIT_RATING: "critRating",
    STATS_CRIT_CHANCE: "critChance",
    STATS_CRIT_BONUS: "critBonus",
    STATS_RELOAD_SPEED: "reloadSpeed",
    STATS_MAGAZINE_SIZE: "magazineSize",

    ELEMENT_ENERGY: "Energy",
    ELEMENT_FIRE: "Fire",
    ELEMENT_WATER: "Water",
    ELEMENT_NATURE: "Nature",
    ELEMENT_PHYSICAL: "Physical",
    ELEMENT_EDGE: "Edge",

    TEXT_PERK_DAMAGE_BONUS: "Increase damage by {value} %",
    TEXT_PERK_HEADSHOT_BONUS: "Increase headshot damage by {value}%",
    TEXT_PERK_CRIT_RATING: "Increase critical rating by {value}",
    TEXT_PERK_CRIT_DAMAGE: "Increase critical damage by {value}%",
    TEXT_PERK_ELEMENT: "{element} Element, deal {value}% more damage",
    TEXT_PERK_RELOAD_SPEED: "Increase reload speed by {value}%",
    TEXT_PERK_MIST_BOSS_BONUS: "Deal {value}% more damage to mist monsters and bosses",

    WEAPON_SHOTGUN: "shotgun",
    WEAPON_ASSAULT: "assault",
    WEAPON_SNIPER: "sniper",
    WEAPON_PISTOL: "pistol",
    WEAPON_EXPLOSIVE: "explosive",

    WEAPON_CLUB: "club",
    WEAPON_HARDWARE: "hardware",
    WEAPON_SWORD: "sword",
    WEAPON_SCYTHE: "scythe",
}