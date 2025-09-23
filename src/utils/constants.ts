type SocialPlatforms = 'google' | 'github'

type SocialPlatform = {
  name: SocialPlatforms
  icon: string
  link: string
}

const socialPlatforms: SocialPlatform[] = [
  {
    name: 'google',
    icon: '/icons/google.svg',
    link: 'http://localhost:8080/api/auth/google'
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
