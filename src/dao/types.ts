import { InviteStatus } from './enums'

interface Requirements {
  [key: string]: string
}

export type DAO = {
  dao_id: string
  name: string
  guild_id: string
  about?: string
  profile_picture?: string
  contract_address?: string
  snapshot?: string
  owner_id?: string
  onboarding: boolean

  created_at?: string
  updated_at?: string
}

export type DAOMember = {
  dao_id: string
  member_id: string

  created_at?: string
}

export type DAORole = {
  dao_id: string
  role_id: string
  name: string
  discord_role_id: string

  created_at?: string
  updated_at?: string
}

export type DAOMemberRole = {
  dao_id: string
  member_id: string
  role_id: string
}

export type MemberRoleDiscord = {
  dao_id: string
  member_id: string
  discord_role_id: string[]
}

export type DAOView = {
  dao_id: string
  guild_id: string
  name: string
  onboarding: boolean
  about?: string
  profile_picture?: string
  contract_address?: string
  wallet_address?: string
  owner_id?: string

  members: string[]
  roles: string[]
  socials: DAOSocial[] //Socials
  tokens: string[] //Tokens

  created_at?: string
  updated_at?: string
}

export type DAOInvite = {
  id: number
  dao_id: string
  sender_id: string
  receiver_id: string
  invite_code: string
  status: InviteStatus

  created_at?: string
  updated_at?: string
}

export type MemberDAOView = {
  member_id: string
  dao_id: string
  name: string
  guild_id: string
  onboarding: boolean

  about?: string
  profile_picture?: string
  owner_id?: string

  roles: DAORole[]
  access: string

  created_at?: string
  updated_at?: string
}

export type DAOSocial = {
  id: number
  dao_id: string
  type: string
  url: string

  created_at?: string
  updated_at?: string
}

export type FavouriteDAO = {
  favourite_id: string
  dao_id: string
  member_id: string

  created_at?: string
}

export type Department = {
  department_id: string
  dao_id: string
  name: string

  created_at?: string
  updated_at?: string
}

export type Collaboration = {
  collaboration_id: string
  applying_member_id: string
  from_dao_id: string
  to_dao_id: string
  status: string
  title: string
  department: string
  description: string
  requirements?: Requirements
  benefits: string
  attachment: string

  replying_member_id: string

  created_at?: string
  updated_at?: string
}

export type Token = {
  id: number
  dao_id: string
  ticker: string
  contract_address: string
  average_time_held: string
  holders: number

  created_at?: string
  updated_at?: string
}

export type TokenGating = {
  id: number
  dao_id: string
  type: string
  contract_address: string
  minimum_value: string
  chain_id: number

  created_at?: string
  updated_at?: string
}

export type Blog = {
  id: number
  dao_id: string
  link: string
  metadata?: any
  created_at?: string
}
export type Review = {
  id: number
  dao_id: string
  member_id: string
  content: string
  rating?: number

  created_at?: string
}
