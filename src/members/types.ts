import { ClanRole, InviteStatus, FetchMemberType } from './enums'

export interface MemberSocial {
  [key: string]: string
}

//Member
export type Member = {
  member_id: string
  username: string
  did: string
  open_for_opportunity: boolean
  captain: boolean

  //optionals
  name?: string
  email?: string
  about?: string
  skills: string[]
  profile_picture?: string

  created_at?: string
  updated_at?: string
}

export type MemberResponse = {
  member_id: string
  username: string
  did: string
  open_for_opportunity: boolean
  captain: boolean

  //optionals
  name?: string
  email?: string
  about?: string
  skills: string[]
  profile_picture?: string
  socials?: MemberSocial[]

  discord: Discord
  wallets: WalletView[]

  created_at?: string
  updated_at?: string
}

//Discord
export type Discord = {
  discord_user_id: string
  username: string
  avatar: string
  discriminator: string
  public_flags: number
  flags: number
  banner: string | null
  banner_color: string | null
  accent_color: string | null
  locale: string
  mfa_enabled: boolean
  email: string
  verified: boolean
}

//Wallets
export type Wallet = {
  id: string
  member_id: string
  wallet_address: string
  chain_id: string
  default: boolean
}

export type Chain = {
  id: string
  network: string
  name: string
  chain_id: string
  type: string
  currency: string
}

export type WalletView = {
  wallet_id: string
  wallet_address: string
  chain_id: string
  chain: string
  default: boolean
  network: string
  currency: string
  type: string
}

//Socials

export type Social = {
  id: string
  member_id: string
  type: string
  url: string

  created_at?: string
  updated_at?: string
}

export type Onboarding = {
  member_id: string
  admin: boolean
  contributor: boolean
  type_of_work: string[]
}

export type MemberFilter = {
  skills: string[]
}

//Connections
export type ConnectionRequest = {
  id: string
  sender_id: string
  receiver_id: string
  status: InviteStatus

  created_at?: string
  updated_at?: string
}

export type Connection = {
  member: Member
  status: InviteStatus
}

//Clans

export type Clan = {
  clan_id: string
  name: string
  visbility: string
  avatar: string
  created_by: string

  created_at?: string
  updated_at?: string
}

export type ClanMember = {
  clan_id: string
  member_id: string
  role: ClanRole
  username: string
  profile_picture: string
  notification: boolean

  created_at?: string
}

export type ClanView = {
  clan_id: string
  name: string
  visbility: string
  avatar: string
  created_by: string

  members: ClanMember[]

  created_at?: string
  updated_at?: string
}

export type ClanInvite = {
  id: string
  clan_id: string
  sender_id: string
  invite_code: string
  status: InviteStatus
  receiver_id: string

  created_at?: string
  updated_at?: string
}

export type ClanMemberInfo = {
  member_id: string
  username: string
  profile_picture: string
}

export type ClanProjectInfo = {
  project_id: string
  title: string
  progress?: number
}

export type ClanBountyInfo = {
  value: number
  data: number[]
}

export type ClanResponse = {
  clan_id: string
  name: string
  visbility: string
  avatar: string
  created_by: string

  members: ClanMemberInfo[]
  admin: ClanMemberInfo

  projects?: {
    active: ClanProjectInfo[]
    completed: ClanProjectInfo[]
  }

  earned_badges?: string[]
  skills?: string[]
  reviews?: string[]
  applications?: string[]
  total_bounty?: ClanBountyInfo
  chat_id?: string

  created_at?: string
  updated_at?: string
}

export type MemberFetch = {
  type: FetchMemberType
  value: string
}
