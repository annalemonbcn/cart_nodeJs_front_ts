import type { SOCIAL_PLATFORMS } from '@/utils/constants'

type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number]

interface ISocialBtnProps {
  socialPlatform: SocialPlatform
}

export type { ISocialBtnProps }
