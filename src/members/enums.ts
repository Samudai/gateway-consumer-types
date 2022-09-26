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

export enum FetchMemberType {
  MEMBER_ID = 'member_id',
  USERNAME = 'username',
  WALLET_ADDRESS = 'wallet_address',
  DISCORD_ID = 'discord_user_id',
}
