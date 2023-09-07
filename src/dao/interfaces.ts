import {
  AccessEnums,
  CollaborationResponse,
  DAOEnums,
  DAOView,
  SubdomainInfo,
  TeamMember,
} from '..'
import { DAOItems } from '../activity/enums'
import {
  InviteStatus,
  OnboardingStartAs,
  OnboardingСapabilities,
} from './enums'

export interface getDaoResponse {
  message: string
  data?: daoData[]
  error?: string
}

export interface getSingleDaoResponse {
  message: string
  data?: { dao: DAOView }
  error?: string
}

export interface daoData {
  member_id: string
  dao_id: string
  name: string
  guild_id: string
  onboarding: boolean
  about?: string
  profile_picture?: string
  owner_id?: string
  roles: {
    dao_id: string
    role_id: string
    name: string
    discord_role_id: string
  }[]
  token_gating: boolean
  dao_type: DAOEnums.DAOType
  access: AccessEnums.AccessType[]
  created_at: string
  updated_at?: string
  snapshot: string
}

export interface inviteDaoResponse {
  message: string
  data?: {
    dao_invite: string
  }
  error?: string
}

export interface addDaoResponse {
  message: string
  data?: {
    dao_id: string
  }
  error?: string
}

export interface getDaoMembersResponse {
  message: string
  data?: TeamMember[]
  error?: string
}

export interface getDaoProgressResponse {
  message: string
  data?: {
    items: {
      [key in DAOItems]: boolean
    }
  }
  error?: string
}

export interface checkSubdomainDaoResponse {
  message: string
  data?: {
    exists: boolean
  }
  error?: string
}

export interface fetchSubdomainInfoResponse {
  message: string
  data?: { data: SubdomainInfo }
  error?: string
}

export interface createCollaborationRequest {
  collaboration: {
    applying_member_id: string
    from_dao_id: string
    to_dao_id: string
    status: InviteStatus
    title: string
    scope: string
    description: string
    requirements: string[]
    benefits: string
  }
}

export interface fetchCollaborationResponse {
  message: string
  data?: CollaborationResponse[]
  error?: string
}

export interface updateCollaborationRequest {
  collaborationId: string
  replyingMemberId: string
  status: InviteStatus
}

export interface IBlog {
  id: string
  img: string
  topic: string
  title: string
  content: string
  read_time: string
  link: string
  read: number
  created_at: string
}

export interface IEvent {
  id: string
  title: string
  description: string | null
  date: string
  time_from: string
  time_to: string
  location: string
  link: string
  members: IUserAvatar[]
}

interface IUserAvatar {
  id: string
  avatar: string
}

export interface OnboardingFormData {
  startAs: OnboardingStartAs | null
  department: string[]
  capabilities: OnboardingСapabilities[]
  turnedWidget: false
  movedWidget: false
}
