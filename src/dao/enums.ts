export enum InviteStatus {
  REVOKED = 'revoked',
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  DECLINED = 'declined',
}

export enum DAOType {
  GENERAL = 'general',
}

export enum DAOOnboardingFlowStep {
  'BOT_ADDED' = 'BOT_ADDED',
}

export enum OnboardingСapabilities {
  INVESTMENT = 'Investment',
  PROJECT_MANAGMENT = 'Internal Project Management',
  TRACK_KPI = 'Track KPIs',
  COMMUNITY_ENGAGMENT = 'Community Engagement',
}

export enum OnboardingStartAs {
  CONTRIBUTOR = 'Contributor',
  DAO_ADMIN = 'DAO Admin',
}

export enum OnboardingScreens {
  CONNECT_WALLET = 'Connect Wallet',
  START_AS = 'Start As',
  CONNECT_APPS = 'Connect to different Apps',
  CREATE_DEPARTMENT = 'Create Department',
  CAPABILITIES = 'What defines your work best?',
  DASHBOARD_TUTORIAL = 'Dashboard Tutorial',
  CONNECT_EXTRA_APPS = 'Connect Apps',
  COMPLETED = 'Completed',
}

export const DAOOnboardingFlow = [
  {
    step: 5,
    name: 'discord_bot_added',
  },
]
