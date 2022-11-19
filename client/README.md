# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Invoker game settings 

## How to add new icons ?

### Spell icons
1. Add a new icon set name in "spellIconsEnum" which is in <<src/types/spellIcons.ts>>
2. Add the icon set in "allSpellIcons" which is in <<src/types/spellIcons.ts>>
3. Add icons to <<src/assets/invokerIcons/spells/{theIconSetName}_{spell_name}.jpg>>
	the icon set must be 'camelCase'
	spell name must be 'snakeCase'
	image must be in .jpg format
	*Example: src/assets/invokerIcons/spells/babyInvoker_forge_spirit.jpg*
4. Make a function that should check and get an image, otherwise return a default image
5. Add to the "defineSpellIcon" function a case that use function from step 3
 End :)

# Invoker game settings 

# Sphere icons

1. Создать папку с названием набора в директории `client/src/assets/invokerIcons/spheres/yourSetName`
#### Пример: `client/src/assets/invokerIcons/spheres/babyInvoker`

2. Положитe в только что созданную папку иконки сфер в формате `.jpg`

	2.1 _Желательное названия иконок: `quas.jpg, wex.jpg, exort.jpg`_

3. В коде который находится в директории `client/src/global/allSpellAndSpheresIcons.ts` нужно сделать несколько поправок

	3.1. Cделать [import](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import) ваших иконок с папки в которую вы только что их добавляли.

#### **Пример импорта:** 
```javascript
import exortIconName from "../assets/invokerIcons/spheres/yourSetName/yourIconName.jpg"
```
	
3.2 Добавить названеи набора в тип объекта 

#### **Пример с типом объекта (47стр. кода):**

```typescript	
export type spheresIconsType = {
	default: string,
	babyInvoker: string
	magusApex: string
	yourSetName: string
}
```
3.3 Добавте в каждый [объект](https://learn.javascript.ru/object) который отвечает за сферу, название вышего набора со сферами (Который вы указывали в тип объекта.Как ключ объекта ) и иконку которую вы импортировали (как значение)

#### **Пример с объектом:**
```typescript
// ==== exort ====
export const exortIcons: spheresIconsType = {
	default: exortIcon,
	babyInvoker: exportBabyInvoker,
	magusApex: exportMagusApex,
	yourSetName: exortIconName
}
// ==== Wex ====
export const wexIcons: spheresIconsType = {
	default: wexIcon,
	babyInvoker: wexBabyInvoker,
	magusApex: wexMagusApex,
	yourSetName: yourWexIcon
}
// ==== Quas ====
export const quasIcons: spheresIconsType = {
	default: quasIcon,
	babyInvoker: quasBabyInvoker,
	magusApex: quasMagusApex,
	yourSetName: yourQuasIcon
}
```
4. В Enum(перечисление) так-же добавте названия набора который находиться в `invoker-game-fullstack/client/src/types/theSets.ts`
#### **Пример:**

``` typescript
export enum iconSetsEnum {
	'babyInvoker' = 'babyInvoker',
	'magusApex' = 'magusApex',
	'default' = 'default',
	'yourSetName' = 'yourSetName'
}
``` 
5. Опишите ваш набор в файле 'TheSets.ts' который находиться в `invoker-game-fullstack/client/src/global/theSets.ts`

#### **Пример:** 
```typescript
export const theSets: ISet[] = [
	{
		id: iconSetsEnum.babyInvoker,
		title: 'Baby Invoker',
		imgs: [
			quasIcons.babyInvoker,
			wexIcons.babyInvoker,
			exortIcons.babyInvoker,
			forgeIcons.babyInvoker,
			ghostWalkIcons.babyInvoker,
		],
	},
	{
		id: iconSetsEnum.magusApex,
		title: 'Magus Apex',
		imgs: [quasIcons.magusApex, exortIcons.default, wexIcons.magusApex, sunStrikeIcons.magusApex],
	},
	{
		id: iconSetsEnum.default,
		title: 'Default icons sphere',
		imgs: [quasIcons.default, wexIcons.default, exortIcons.default]
	},
	=== Example ===
	{
		id: iconSetsEnum.yourSetName,
		title: 'some title',
		imgs: [quasIcons.yourSetName, wexIcons.yourSetName, exortIcons.yourSetName]
	}
]

```





<!-- Добавить описания того как добавить иконку которая входит в набор сфере  -->
<!-- по типу baby invoker  -->