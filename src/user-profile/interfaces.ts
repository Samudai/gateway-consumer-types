import { ProjectEnums, discordData } from '..'
import { ContributorItems } from '../activity/enums'
import {
  FeaturedProjects,
  MemberResponse,
  MemberWorkProgress,
} from '../members/types'

export interface getMemberByIdResponse {
  message: string
  data?: {
    member: MemberResponse
    socials: {
      member_id: string
      type: string
      url: string
    }[]
  }
  error?: string
}

export interface updateMemberReq {
  member: {
    member_id: string
    username: string
    did: string
    open_for_opportunity: boolean
    captain: boolean
    name?: string
    email?: string
    about?: string
    skills: string[]
    profile_picture?: string
    ceramic_stream?: string
  }
  socials: {
    member_id: string
    type: string
    url: string
  }[]
}
export interface member {
  member_id: string
  username: string
  did: string
  open_for_opportunity: boolean
  captain: boolean
  subdomain: null | string
  name: string
  email: string
  phone?: string | null
  about?: string
  skills?: string[]
  profile_picture?: string | null
  discord: {
    discord_user_id: string
    username: string
    avatar: string
    locale: string
    discriminator: string
    email: string
    verified: boolean
  }
  wallets: {
    wallet_id: number
    wallet_address: string
    chain_id: number
    chain: string
    default: boolean
    network: string
    currency: string
    type: string
  }[]
  created_at: string
  updated_at: string
  ceramic_stream: string | null
}

export interface createClanRequest {
  clan: clan
}

export interface clan {
  name: string
  visibility: ProjectEnums.Visibility
  avatar: string
  created_by: string
}

export interface addMemberRequest {
  clanMember: {
    clan_id: string
    member_id: string
    role: string
  }
}

export interface createClanResponse {
  message: string
  data?: {
    clan_id: string
  }
  error?: string
}

export interface addMemberResponse {
  error?: any
  message: string
  data?: {
    message: string
  }
}

export interface getClanByMemberIdResponse {
  message: string
  data?: clans[]
  error?: string
}

interface clans {
  clan_id: string
  name: string
  visibility: string
  avatar: string
  created_by: string
  members: {
    member_id: string
    role: string
    notification: boolean
  }[]

  created_at: string
  updated_at: string | null
}

export interface getClanByMemberIdRequest {
  member: {
    type: string
    value: string
  }
}

export interface createConnectionReq {
  connection: {
    sender_id: string
    receiver_id: string
    status: 'pending'
  }
}

export interface updateConnectionReq {
  connection: {
    id?: string
    sender_id: string
    receiver_id: string
    status: string
  }
}

export interface updateHourlyRate {
  member_id: string
  currency: string
  hourly_rate: string
}

export interface updateOpenForOpportunity {
  member_id: string
  open_for_opportunity: boolean
}

export interface getConnectionsById {
  message: string
  data?: {
    connections: MemberResponse[]
  }
  error?: string
}

export interface updateFeaturedProjectsRequest {
  member_id: string
  featured_projects: FeaturedProjects[]
}

export interface getMemberWorkProgress {
  message: string
  data?: {
    member_work_progress: MemberWorkProgress
  }
  error?: string
}

export interface getContributorProgressResponse {
  message: string
  data?: {
    items: {
      [key in ContributorItems]: boolean
    }
  }
  error?: string
}

export interface claimNFTResponse {
  message: string
  data?: {
    message: string
  }
  error?: string
}

export interface getDiscordGuilds {
  message: string
  data?: discordData
  error?: string
}

export interface IUser {
  id: string // member_id
  link: string //rename did
  fullname: string //username
  location: string //no
  avatar: string //profile_picture ->link
  rating: UserRating //no
  education: string //no
  languages: string[] //no
  about: string | null //empty
  private: boolean //no
  open_for_jobs: boolean //open for opportunity
  balance: {
    //no
    btc: number //wallet address & chain
  }
  socials: {
    discord: string | null
    linkedIn: string | null
    github: string | null
    behance: string | null
    dribbble: string | null
  }
  skills: ISkill[] //empty
  task_count?: number
  updated_at: string
  created_at: string
  role: Roles //no
  profession: string //no
}

export enum Roles {
  ADMIN = 'DAO Admin',
  CAPTAIN = 'DAO Captain',
  CONTRIBUTOR = 'Contributor',
}

export enum UserRating {
  A = 'A+',
  B = 'B+',
  C = 'C+',
}
export interface ISkill {
  id: number | string
  name: string
  icon: string | null
}
