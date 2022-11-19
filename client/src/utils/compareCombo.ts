import { sphereNameEnum } from '../types/spheres'

interface ICompareCombo {
	spellCombo: sphereNameEnum[]
	userCombo: sphereNameEnum[]
}

export default function compareCombo({
	spellCombo,
	userCombo,
}: ICompareCombo): boolean {
	return userCombo.length === spellCombo.length &&
		spellCombo.every((sphere, indx) => sphere === userCombo[indx])
		? true
		: false
}
