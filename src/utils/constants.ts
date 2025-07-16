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

export { socialPlatforms }
export type { SocialPlatform }
