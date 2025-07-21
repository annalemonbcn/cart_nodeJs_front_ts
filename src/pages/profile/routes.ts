import type { PageRoute } from '@/utils/routes'
import { ProfilePage } from '.'

const ProfileRoute: PageRoute = {
  name: 'profile',
  path: 'profile',
  displayText: 'Profile',
  component: ProfilePage
}

export default ProfileRoute
