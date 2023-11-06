export enum InviteStatus {
  REVOKED = 'revoked',
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  DECLINED = 'declined',
}

export enum ClanRole {
  OWNER = 'owner',
  MEMBER = 'member',
}

export enum MemberOnboardingFlowStep {
  'LOGIN' = 'LOGIN',
  'TYPE_OF_MEMBER' = 'TYPE_OF_MEMBER',
  'TRIAL_DASHBOARD' = 'TRIAL_DASHBOARD',
  'CONNECT_DISCORD' = 'CONNECT_DISCORD',
  'ADD_NAME' = 'ADD_NAME',
}

export enum MemberOnboardingFlowStepNumber {
  'LOGIN' = 1,
  'TYPE_OF_MEMBER' = 2,
  'TRIAL_DASHBOARD' = 3,
  'CONNECT_DISCORD' = 4,
  'ADD_NAME' = 5,
}

export enum ProfilePicture {
  'Photo',
  'NFT',
}

export const MemberOnboardingFlow = [
  {
    step: 1,
    name: 'login',
  },
  {
    step: 2,
    name: 'type_of_member',
  },
  {
    step: 3,
    name: 'trial_dashboard',
  },
  {
    step: 4,
    name: 'connect_discord',
  },
  { step: 5, name: 'add_name' },
]

export enum FetchMemberType {
  MEMBER_ID = 'member_id',
  USERNAME = 'username',
  WALLET_ADDRESS = 'wallet_address',
  DISCORD_ID = 'discord_user_id',
}

export enum RewardType {
  TASK = 'task',
  BOUNTY = 'bounty',
}

export enum RewardInterval {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
}

export enum RewardRole {
  ADMIN = 'Admin',
  TRIAL_ADMIN = 'Trial admin',
  MODERATOR = 'Moderator',
  USER = 'User',
}
