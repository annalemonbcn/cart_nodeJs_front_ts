import { API_ROUTES } from '@/services/constants'

type SocialPlatforms = 'google' | 'github'

type SocialPlatform = {
  name: SocialPlatforms
  icon: string
  link: string
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// TODO: implement github login or delete
const socialPlatforms: SocialPlatform[] = [
  {
    name: 'google',
    icon: '/icons/google.svg',
    link: `${API_BASE_URL}${API_ROUTES.auth.googleLogin()}`
  },
  {
    name: 'github',
    icon: '/icons/github.svg',
    link: 'https://github.com'
  }
]

const zipCodeRegex = /^[A-Za-z0-9\- ]{3,10}$/
const phoneNumberRegex = /^\+\d{6,15}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex =
  // eslint-disable-next-line no-useless-escape
  /^(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?`~])[A-Za-z\d!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?`~]{8,}$/

const regex = {
  zipCodeRegex,
  phoneNumberRegex,
  passwordRegex,
  emailRegex
}

export { socialPlatforms, regex }
export type { SocialPlatform }
