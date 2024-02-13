import { IMember } from '../project/interfaces'
import { ProjectResponse } from '../project/types'
import { DAOType, InviteStatus } from './enums'

// interface Requirements {
//   [key: string]: string
// }

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
  dao_type: DAOType
  created_at?: string
  updated_at?: string
  open_to_collaboration?: boolean
  tags?: string[]
  poc_member_id?: string
  join_dao_link?: string
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
  snapshot?: string

  dao_type: DAOType

  members?: IMember[]
  members_profile_pictures?: string[]
  members_count?: number
  roles: string[]
  socials: DAOSocial[] //Socials
  tokens: string[] //Tokens

  created_at?: string
  updated_at?: string
  open_to_collaboration?: boolean
  tags: string[]
  poc_member?: IMember
  ismember?: string
  join_dao_link?: string
  collaboration_pass: DaoCollaborationPass
  collaborations: Collaborations[]
}

export type DaoCollaborationPass = {
  collaboration_pass_id: string
  claimed: boolean
}

export type Collaborations = {
  collaboration_id: string
  dao_id: string
  name: string
  profile_picture: string
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
  dao_type: DAOType

  about?: string
  profile_picture?: string
  owner_id?: string
  snapshot: string

  roles: DAORole[]
  access: string
  token_gating: boolean

  dao_created?: string
  dao_updated?: string
  member_joined?: string
  open_to_collaboration?: boolean
  tags: string[]
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
  department?: string
  description: string
  requirements?: string[]
  benefits: string
  attachment: string
  scope: string

  replying_member_id: string

  created_at?: string
  updated_at?: string
}

export type CollaborationResponse = {
  collaboration_id: string
  applying_member: IMember
  from_dao_id: string
  to_dao_id: string
  status: string
  title: string
  department?: string
  description: string
  requirements?: string[]
  benefits: string
  attachment: string
  scope: string

  replying_member: IMember

  created_at?: string
  updated_at?: string
}

export type CollaborationPass = {
  collaboration_pass_id: string
  dao_id: string
  claimed: boolean
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

export type ReviewResponse = {
  id: number
  dao_id: string
  member_id: string
  content: string
  rating?: number
  member: IMember
  created_at?: string
}

export type Analytics = {
  dao_id: string
  member_id: string
  visitor_ip: string
}

export type DataPoint = {
  date: string
  value: number
}

export type TMember = {
  member_id: string
  username: string
  profile_picture?: string
  name?: string
  present_role?: string
  created_at?: string
}

export type TeamMemberResponse = {
  member: TMember
  open_task: number
  closed_task: number
  projects: ProjectResponse[]
  role: DAORole[]
  last_activity: any
  skills: string[]
  member_since?: string
}

export type TeamMember = {
  member_id: string
  name?: string
  username: string
  profile_picture?: string

  dao_id: string
  roles?: DAORole[]
  access?: string

  task_count: number
  skills: string[]
  member_joined?: string
}

export type FavouriteDAOResponse = {
  favourite_id: string
  dao_id: string
  member_id: string

  created_at?: string

  name: string
  profile_picture?: string
}

export type SubdomainInfo = {
  dao_id: string
  subdomain_claimed: string
  provider_address: string
  approved: boolean
}

export type Subscription = {
  subscription_status: string
  quantity: number
  current_plan: CurrentPlan
  interval: Interval
}

export type CurrentPlan = {
  price_tier: string
  users: number
  projects: number
  forms: number
  forum_members: number
  forum_history: string
  support: string
  chats_jobs_bounties: string
}

export type Interval = {
  currency: string
  interval: string
  interval_count: number
}
