import { sphereNameEnum } from "./spheres"

export enum idSpellEnum {
  chaosMeteor,
  forgeSpirit,
  sunStrike,
  coldSnap,
  iceWall,
  ghostWalk,
  deafeningBlast,
  tornado,
  alacrity,
  emp,
  empty
}

export interface ISpell {
  id: idSpellEnum,
  name: string,
  img: string,
  combo: sphereNameEnum[],
}