export enum InviteStatus {
  REVOKED = 'revoked',
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  DECLINED = 'declined',
  REJECTED = 'rejected',
}

export enum ClanRole {
  OWNER = 'owner',
  MEMBER = 'member',
}

export enum MemberOnboardingFlowStep {
  'LOGIN' = 'LOGIN',
  'TYPE_OF_MEMBER' = 'TYPE_OF_MEMBER',
  'SETUP_PROFILE' = 'SETUP_PROFILE',
  'PROFILE_DETAILS' = 'PROFILE_DETAILS',
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
    name: 'setup_profile',
  },
  {
    step: 4,
    name: 'profile_details',
  },
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
