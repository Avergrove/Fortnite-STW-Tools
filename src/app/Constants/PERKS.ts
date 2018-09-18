import { Perk, StatsPerk, ElementPerk } from 'src/app/models/perk';
import { Constants} from 'src/app/models/constants';

// These are mock perks, they should be replaced with API perks.
export const PERKS: Perk[] = [
    new StatsPerk("Damage", Constants.TEXT_PERK_DAMAGE_BONUS, 5, 5, Constants.STATS_CRIT_CHANCE, 10),
    new StatsPerk("Crit Rating", Constants.TEXT_PERK_CRIT_RATING, 1, 5, Constants.STATS_CRIT_CHANCE, 10),
    new StatsPerk("Reload Speed", Constants.TEXT_PERK_RELOAD_SPEED, 1, 5, Constants.STATS_CRIT_CHANCE, 10),
    new ElementPerk("Element", Constants.TEXT_PERK_ELEMENT, 1, 5, Constants.ELEMENT_ENERGY, 10),
    new StatsPerk("Crit Damage Bonus", Constants.TEXT_PERK_CRIT_DAMAGE, 1, 5, Constants.STATS_CRIT_BONUS, 10),
    new StatsPerk("Condition Bonus", Constants.TEXT_PERK_MIST_BOSS_BONUS, 1, 5, Constants.STATS_CRIT_CHANCE, 50)
]

