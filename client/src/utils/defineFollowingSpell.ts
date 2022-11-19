// ==== Types ====
import { idSpellEnum } from './../types/spells';
// ==== Global ====
import { allSpellsData } from "../global/allSpells";
// ==== Utils ====
import randomInteger from "./randomInteger";

export default function defineFollowingSpell(): idSpellEnum {
	return allSpellsData[randomInteger(0, allSpellsData.length - 1)].id
}