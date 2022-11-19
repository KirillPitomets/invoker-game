import { IRoutes, RouteEnum } from './../types/route'
// ==== Pages ====
import Information from '../Pages/Information'
import HighScore from '../Pages/HighScorePage'
import Settings from '../Pages/Settings'
import UserProfile from '../components/UserProfile'
import Authorization from '../components/Authorization'

export const routes: IRoutes[] = [
	{ id: 'information-route', path: RouteEnum.information, Page: Information },
	{ id: 'high-score-route', path: RouteEnum['high-score'], Page: HighScore },
	{ id: 'settings-route', path: RouteEnum.settings_id, Page: Settings },
	{ id: 'user-route', path: RouteEnum.user, Page: UserProfile },
	{ id: 'user-auth', path: RouteEnum.auth_id, Page: Authorization },
]
