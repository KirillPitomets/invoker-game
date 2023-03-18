// ==== quas ====
import quasIcon from '../assets/invokerIcons/spheres/default/quas.jpg'
import quasBabyInvoker from '../assets/invokerIcons/spheres/babyInvoker/quas.jpg'
import quasMagusApex from '../assets/invokerIcons/spheres/magusApex/quas.jpg'
// ==== wex ====
import wexIcon from '../assets/invokerIcons/spheres/default/wex.jpg'
import wexBabyInvoker from '../assets/invokerIcons/spheres/babyInvoker/wex.jpg'
import wexMagusApex from '../assets/invokerIcons/spheres/magusApex/wex.jpg'
// ==== exort ====
import exortIcon from '../assets/invokerIcons/spheres/default/exort.jpg'
import exportBabyInvoker from '../assets/invokerIcons/spheres/babyInvoker/exort.jpg'
import exportMagusApex from '../assets/invokerIcons/spheres/magusApex/exort.jpg'
// ==== Forge spirit ====
import forgeSpirit from '../assets/invokerIcons/spells/forgeSpirit/forge_spirit.jpg'
import forgeSpiritBabyInvoker from '../assets/invokerIcons/spells/forgeSpirit/babyInvoker_forge_spirit.jpg'
import forgeSpiritFamiliarsOfGloriousInspiration from '../assets/invokerIcons/spells/forgeSpirit/familiars_of_glorious_Inspiration_forge_spirit.jpg'
// ==== Cold snap ====
import coldSnap from '../assets/invokerIcons/spells/coldSnap/cold_snap.jpg'
// ==== Ghost walk ====
import ghostWalk from '../assets/invokerIcons/spells/ghostWalk/ghost_walk.jpg'
import ghostWalkBabyInvoker from '../assets/invokerIcons/spells/ghostWalk/babyInvoker_ghost_walk.jpg'
// ==== Sun Strike ====
import sunStrike from '../assets/invokerIcons/spells/sunStrike/sun_strike.jpg'
import sunStrikeMagusApex from '../assets/invokerIcons/spells/sunStrike/magusApex_sun_strike.jpg'
// ==== Meteor ====
import meteor from '../assets/invokerIcons/spells/meteor/meteor.jpg'
// ==== Tornado ====
import tornado from '../assets/invokerIcons/spells/tornado/tornado.jpg'
import tornadoDarkArtistry from '../assets/invokerIcons/spells/tornado/dark_artistry_tornado.jpg'
// ==== Blast ====
import blast from '../assets/invokerIcons/spells/blast/blast.jpg'
import blastDarkArtistry from '../assets/invokerIcons/spells/blast/dark_artistry_blast.jpg'
// ==== Alacrity ====
import alacrity from '../assets/invokerIcons/spells/alacrity/alacrity.jpg'
import alacrityMagusApex from '../assets/invokerIcons/spells/alacrity/magus_accord_alacrity.jpg'
// ==== Ice wall ====
import iceWall from '../assets/invokerIcons/spells/iceWall/ice_wall.jpg'
// ==== Emp ====
import emp from '../assets/invokerIcons/spells/emp/emp.jpg'

// ==== Empty ====
export const emptyIcon = {
	empty: '',
}

export type spheresIconsType = {
	default: string
	babyInvoker: string
	magusApex: string
}

// ==== exort ====

export const exortIcons: spheresIconsType = {
	default: exortIcon,
	babyInvoker: exportBabyInvoker,
	magusApex: exportMagusApex,
}
// ==== Wex ====

export const wexIcons: spheresIconsType = {
	default: wexIcon,
	babyInvoker: wexBabyInvoker,
	magusApex: wexMagusApex,
}

// ==== Quas ====

export const quasIcons: spheresIconsType = {
	default: quasIcon,
	babyInvoker: quasBabyInvoker,
	magusApex: quasMagusApex,
}

// ==== Ice wall ====
export type iceWallIconsType = {
	default: string
}

export const iceWallIcons: iceWallIconsType = {
	default: iceWall,
}

// ==== Forge Spirit ====
export type forgeIconsType = {
	defaultIcon: string
	babyInvoker: string
	familiarsOfGloriousInspiration: string
}

export const forgeIcons: forgeIconsType = {
	babyInvoker: forgeSpiritBabyInvoker,
	familiarsOfGloriousInspiration: forgeSpiritFamiliarsOfGloriousInspiration,
	defaultIcon: forgeSpirit,
}
// ==== EMP ====
export type empIconsType = {
	default: string
}

export const empIcons: empIconsType = {
	default: emp,
}

// ==== Meteor ====
export type meteorIconsType = {
	default: string,
}

export const meteorIcons: meteorIconsType = {
	default: meteor,
}
// ==== Ghost walk ====

export type ghostWalkIconsType = {
	default: string
	babyInvoker: string
}

export const ghostWalkIcons: ghostWalkIconsType = {
	default: ghostWalk,
	babyInvoker: ghostWalkBabyInvoker,
}

// ==== Cold snap ====

export type coldSnapIconsType = {
	default: string
}

export const coldSnapIcons: coldSnapIconsType = {
	default: coldSnap,
}

// ==== Sun Strike ====

export type sunStrikeIconsType = {
	default: string
	magusApex: string
}

export const sunStrikeIcons: sunStrikeIconsType = {
	default: sunStrike,
	magusApex: sunStrikeMagusApex,
}
// ==== Tornado ====

export type tornadoIconsType = {
	default: string
	darkArtistry: string
}

export const tornadoIcons: tornadoIconsType = {
	default: tornado,
	darkArtistry: tornadoDarkArtistry,
}
// ==== Blast ====

export type blastIconsType = {
	default: string
	darkArtistry: string
}

export const blastIcons: blastIconsType = {
	default: blast,
	darkArtistry: blastDarkArtistry,
}
// ==== Alacrity ====

export type alacrityIconsType = {
	default: string
	magusApex: string
}

export const alacrityIcons = {
	default: alacrity,
	magusApex: alacrityMagusApex,
}
