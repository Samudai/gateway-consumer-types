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
  'BOT_ADDED' = 'BOT_ADDED'
}

export const DAOOnboardingFlow = [
  {
      step: 5,
      name: 'discord_bot_added',
  }
];