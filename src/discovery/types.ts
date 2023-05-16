import {
  DAOEventContext,
  DAOEventType,
  MemberEventContext,
  MemberEventType,
} from './enums'

export type DiscoverDAOResponse = {
  dao_id: string
  name: string
  profile_picture?: string

  bounties_open?: number
  bounties_total?: number

  opportunities_open?: number
  opportunities_total?: number

  projects_ongoing: number
  projects_completed: number
}

export type DiscoverMemberResponse = {
  member_id: string
  username: string
  name: string
  profile_picture?: string
  skills: string[]

  badges_earned?: number

  tasks_ongoing?: number
  tasks_completed?: number
}

export type DAOEvent = {
  dao_id: string
  event_type: DAOEventType
  event_context: DAOEventContext
}

export type MemberEvent = {
  member_id: string
  dao_id: string
  event_type: MemberEventType
  event_context: MemberEventContext
}
